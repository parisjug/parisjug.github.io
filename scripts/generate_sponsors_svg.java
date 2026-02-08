///usr/bin/env jbang "$0" "$@" ; exit $?
//JAVA 17+

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Generate sponsors-center.svg from individual sponsor logo SVG files.
 * 
 * This script creates a composite SVG with sponsor logos arranged in a 3-2-3 layout:
 * - Row 1: 3 logos
 * - Row 2: 2 logos (centered)
 * - Row 3: 3 logos
 * 
 * Usage:
 *     jbang generate_sponsors_svg.java <sponsors_dir> <output_file>
 * 
 * Example:
 *     jbang generate_sponsors_svg.java /path/to/sponsors/2026 ../img/sponsors-center.svg
 */
public class generate_sponsors_svg {

    record Sponsor(String file, String name) {}
    
    record Dimensions(double width, double height) {}

    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: jbang generate_sponsors_svg.java <sponsors_dir> <output_file>");
            System.out.println("\nExample:");
            System.out.println("  jbang generate_sponsors_svg.java /path/to/sponsors/2026 ../img/sponsors-center.svg");
            System.exit(1);
        }

        String sponsorsDir = args[0];
        String outputFile = args[1];

        if (!Files.isDirectory(Paths.get(sponsorsDir))) {
            System.err.println("Error: " + sponsorsDir + " is not a directory");
            System.exit(1);
        }

        try {
            generateSponsorsSvg(sponsorsDir, outputFile);
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void generateSponsorsSvg(String sponsorsDir, String outputFile) throws IOException {
        // Define the sponsors and their SVG files
        List<Sponsor> sponsors = List.of(
            new Sponsor("agorapulse.svg", "Agorapulse"),
            new Sponsor("renault-digital.svg", "Renault Digital"),
            new Sponsor("doctolib.svg", "Doctolib"),
            new Sponsor("mirakl.svg", "Mirakl"),
            new Sponsor("octo.svg", "Octo"),
            new Sponsor("oxiane.svg", "Oxiane"),
            new Sponsor("margo.svg", "Margo"),
            new Sponsor("sciam.svg", "SCIAM")
        );

        // SVG parameters (in mm)
        double logoWidth = 110;
        double logoHeight = 65;
        double paddingX = 5;
        double paddingY = 5;

        // Layout: 3 logos in row 1, 2 centered in row 2, 3 in row 3
        int[] layout = {3, 2, 3};

        // Calculate canvas size
        int maxCols = Math.max(Math.max(layout[0], layout[1]), layout[2]);
        int totalRows = layout.length;
        double canvasWidth = maxCols * logoWidth + (maxCols - 1) * paddingX;
        double canvasHeight = totalRows * logoHeight + (totalRows - 1) * paddingY;

        System.out.printf("Canvas size: %.0fmm x %.0fmm%n", canvasWidth, canvasHeight);
        System.out.printf("Layout: %d logos in row 1, %d centered in row 2, %d in row 3%n", 
            layout[0], layout[1], layout[2]);

        // Start building the SVG
        StringBuilder svgContent = new StringBuilder();
        svgContent.append("""
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <!-- Created with Java script for ParisJUG sponsors -->
            
            <svg
               width="%.0fmm"
               height="%.0fmm"
               viewBox="0 0 %.0f %.0f"
               version="1.1"
               id="svg5"
               xml:space="preserve"
               xmlns:dc="http://purl.org/dc/elements/1.1/"
               xmlns:cc="http://creativecommons.org/ns#"
               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:svg="http://www.w3.org/2000/svg">
              <defs id="defs2" />
              <g id="layer1" transform="translate(0,0)">
            """.formatted(canvasWidth, canvasHeight, canvasWidth, canvasHeight));

        // Process each sponsor with the layout
        int sponsorIdx = 0;
        for (int rowIdx = 0; rowIdx < layout.length; rowIdx++) {
            int logosInRow = layout[rowIdx];
            
            // Calculate centering offset for this row
            double rowWidth = logosInRow * logoWidth + (logosInRow - 1) * paddingX;
            double rowOffsetX = (canvasWidth - rowWidth) / 2;

            for (int colIdx = 0; colIdx < logosInRow; colIdx++) {
                if (sponsorIdx >= sponsors.size()) {
                    break;
                }

                Sponsor sponsor = sponsors.get(sponsorIdx);
                sponsorIdx++;

                // Calculate position
                double x = rowOffsetX + colIdx * (logoWidth + paddingX);
                double y = rowIdx * (logoHeight + paddingY);

                Path sponsorPath = Paths.get(sponsorsDir, sponsor.file());

                if (!Files.exists(sponsorPath)) {
                    System.out.printf("Warning: %s not found, skipping %s%n", sponsorPath, sponsor.name());
                    continue;
                }

                System.out.printf("Processing %s at row %d, col %d...%n", sponsor.name(), rowIdx, colIdx);

                String sponsorSvg = Files.readString(sponsorPath);

                // Create a group for this sponsor
                String sponsorId = sponsor.name().toLowerCase().replace(" ", "-");
                svgContent.append(String.format("""
                        <g
                           id="sponsor-%d-%s"
                           inkscape:label="%s"
                           transform="translate(%.1f,%.0f)">
                    """, sponsorIdx - 1, sponsorId, sponsor.name(), x, y));

                // Extract the content from the sponsor SVG
                Pattern pattern = Pattern.compile("<svg[^>]*>(.*)</svg>", Pattern.DOTALL);
                Matcher matcher = pattern.matcher(sponsorSvg);
                
                if (matcher.find()) {
                    String innerContent = matcher.group(1);

                    // Get original dimensions
                    Dimensions dims = extractSvgDimensions(sponsorSvg);
                    double origWidth = dims != null ? dims.width() : logoWidth;
                    double origHeight = dims != null ? dims.height() : logoHeight;

                    // Calculate scale to fit
                    double scaleX = logoWidth / origWidth;
                    double scaleY = logoHeight / origHeight;
                    double scale = Math.min(scaleX, scaleY) * 0.8; // 80% to add some padding

                    // Center the logo
                    double offsetX = (logoWidth - origWidth * scale) / 2;
                    double offsetY = (logoHeight - origHeight * scale) / 2;

                    svgContent.append(String.format("""
                              <g transform="translate(%.16f,%.16f) scale(%.17f)">
                        %s
                              </g>
                        """, offsetX, offsetY, scale, innerContent));
                }

                svgContent.append("    </g>\n");
            }
        }

        svgContent.append("""
              </g>
            </svg>""");

        // Write the output
        Files.writeString(Paths.get(outputFile), svgContent.toString());

        System.out.printf("%nCreated %s%n", outputFile);
        System.out.printf("Final size: %.0fmm x %.0fmm%n", canvasWidth, canvasHeight);
    }

    private static Dimensions extractSvgDimensions(String svgContent) {
        // Try viewBox first
        Pattern viewBoxPattern = Pattern.compile("viewBox=\"([^\"]+)\"");
        Matcher viewBoxMatcher = viewBoxPattern.matcher(svgContent);
        
        if (viewBoxMatcher.find()) {
            String[] parts = viewBoxMatcher.group(1).split("\\s+");
            if (parts.length >= 4) {
                try {
                    return new Dimensions(
                        Double.parseDouble(parts[2]),
                        Double.parseDouble(parts[3])
                    );
                } catch (NumberFormatException e) {
                    // Continue to try width/height
                }
            }
        }

        // Try width and height attributes
        Pattern widthPattern = Pattern.compile("width=\"([^\"]+)\"");
        Pattern heightPattern = Pattern.compile("height=\"([^\"]+)\"");
        
        Matcher widthMatcher = widthPattern.matcher(svgContent);
        Matcher heightMatcher = heightPattern.matcher(svgContent);

        if (widthMatcher.find() && heightMatcher.find()) {
            try {
                String widthStr = widthMatcher.group(1).replaceAll("[^0-9.]", "");
                String heightStr = heightMatcher.group(1).replaceAll("[^0-9.]", "");
                
                if (!widthStr.isEmpty() && !heightStr.isEmpty()) {
                    return new Dimensions(
                        Double.parseDouble(widthStr),
                        Double.parseDouble(heightStr)
                    );
                }
            } catch (NumberFormatException e) {
                // Return null if parsing fails
            }
        }

        return null;
    }
}
