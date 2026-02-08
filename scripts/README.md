# Sponsors SVG Generator

This directory contains scripts to generate the sponsors-center.svg file from individual sponsor logos.

## Available Scripts

- **generate_sponsors_svg.py** - Python implementation
- **generate_sponsors_svg.java** - Java implementation using JBang

Both scripts create a composite SVG with sponsor logos arranged in a 3-2-3 layout:
- Row 1: 3 logos
- Row 2: 2 logos (centered)
- Row 3: 3 logos

## generate_sponsors_svg.py

Python script for generating the sponsors SVG.

### Requirements

- Python 3.6+
- Individual sponsor SVG files

### Usage

```bash
python3 generate_sponsors_svg.py <sponsors_dir> <output_file>
```

### Example

To update the sponsors-center.svg with logos from the parisjug-website repository:

```bash
# Clone the parisjug-website repository (if not already done)
git clone https://github.com/parisjug/parisjug-website.git /tmp/parisjug-website

# Generate the sponsors SVG
cd scripts
python3 generate_sponsors_svg.py \
  /tmp/parisjug-website/static/img/sponsors/2026 \
  ../img/sponsors-center.svg
```

## generate_sponsors_svg.java

Java script using JBang for generating the sponsors SVG. This provides the same functionality as the Python version.

### Requirements

- Java 17+
- [JBang](https://www.jbang.dev/) installed

### Installation of JBang

```bash
# Linux/macOS
curl -Ls https://sh.jbang.dev | bash -s - app setup

# Or with SDKMAN!
sdk install jbang

# Or with Homebrew (macOS)
brew install jbangdev/tap/jbang
```

### Usage

```bash
jbang generate_sponsors_svg.java <sponsors_dir> <output_file>
```

### Example

```bash
# Clone the parisjug-website repository (if not already done)
git clone https://github.com/parisjug/parisjug-website.git /tmp/parisjug-website

# Generate the sponsors SVG with JBang
cd scripts
jbang generate_sponsors_svg.java \
  /tmp/parisjug-website/static/img/sponsors/2026 \
  ../img/sponsors-center.svg
```

### Why JBang?

JBang allows you to run Java code as a script without the need for a separate build step or project setup. The script can be executed directly with a single command.

## Customization

To change the layout or add/remove sponsors, edit the `sponsors` list in either script:

**Python:**
```python
sponsors = [
    {"file": "agorapulse.svg", "name": "Agorapulse"},
    {"file": "renault-digital.svg", "name": "Renault Digital"},
    # ... add more sponsors here
]
```

**Java:**
```java
List<Sponsor> sponsors = List.of(
    new Sponsor("agorapulse.svg", "Agorapulse"),
    new Sponsor("renault-digital.svg", "Renault Digital")
    // ... add more sponsors here
);
```

You can also adjust:
- `logo_width` and `logo_height`: Size of each logo box (in mm)
- `padding_x` and `padding_y`: Spacing between logos (in mm)
- `layout`: Array defining number of logos per row (e.g., `[3, 2, 3]`)

## Output

Both scripts generate an SVG file (340mm × 205mm) with:
- Proper XML namespaces for Inkscape, Sodipodi, RDF, CC, and DC
- Each logo scaled and centered within its box
- Transparent backgrounds (no white rectangles)
- Inkscape labels for easy editing

