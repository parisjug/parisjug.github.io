#!/usr/bin/env python3
"""
Generate sponsors-center.svg from individual sponsor logo SVG files.

This script creates a composite SVG with sponsor logos arranged in a 3-2-3 layout:
- Row 1: 3 logos
- Row 2: 2 logos (centered)
- Row 3: 3 logos

Usage:
    python3 generate_sponsors_svg.py <sponsors_dir> <output_file>

Example:
    python3 generate_sponsors_svg.py /path/to/sponsors/2026 ../img/sponsors-center.svg
"""

import os
import re
import sys


def extract_svg_dimensions(svg_content):
    """Extract original dimensions from SVG content."""
    viewbox_match = re.search(r'viewBox="([^"]+)"', svg_content)
    width_match = re.search(r'width="([^"]+)"', svg_content)
    height_match = re.search(r'height="([^"]+)"', svg_content)
    
    if viewbox_match:
        vb = viewbox_match.group(1).split()
        return float(vb[2]), float(vb[3])
    elif width_match and height_match:
        width = float(re.sub(r'[^0-9.]', '', width_match.group(1)))
        height = float(re.sub(r'[^0-9.]', '', height_match.group(1)))
        return width, height
    
    return None, None


def generate_sponsors_svg(sponsors_dir, output_file):
    """Generate the sponsors SVG file."""
    
    # Define the sponsors and their SVG files
    sponsors = [
        {"file": "agorapulse.svg", "name": "Agorapulse"},
        {"file": "renault-digital.svg", "name": "Renault Digital"},
        {"file": "doctolib.svg", "name": "Doctolib"},
        {"file": "mirakl.svg", "name": "Mirakl"},
        {"file": "octo.svg", "name": "Octo"},
        {"file": "oxiane.svg", "name": "Oxiane"},
        {"file": "margo.svg", "name": "Margo"},
        {"file": "sciam.svg", "name": "SCIAM"},
    ]
    
    # SVG parameters (in mm)
    logo_width = 110
    logo_height = 65
    padding_x = 5
    padding_y = 5
    
    # Layout: 3 logos in row 1, 2 centered in row 2, 3 in row 3
    layout = [3, 2, 3]
    
    # Calculate canvas size
    max_cols = max(layout)
    total_rows = len(layout)
    canvas_width = max_cols * logo_width + (max_cols - 1) * padding_x
    canvas_height = total_rows * logo_height + (total_rows - 1) * padding_y
    
    print(f"Canvas size: {canvas_width}mm x {canvas_height}mm")
    print(f"Layout: {layout[0]} logos in row 1, {layout[1]} centered in row 2, {layout[2]} in row 3")
    
    # Start building the SVG
    svg_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Python script for ParisJUG sponsors -->

<svg
   width="{canvas_width}mm"
   height="{canvas_height}mm"
   viewBox="0 0 {canvas_width} {canvas_height}"
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
'''
    
    # Process each sponsor with the layout
    sponsor_idx = 0
    for row_idx, logos_in_row in enumerate(layout):
        # Calculate centering offset for this row
        row_width = logos_in_row * logo_width + (logos_in_row - 1) * padding_x
        row_offset_x = (canvas_width - row_width) / 2
        
        for col_idx in range(logos_in_row):
            if sponsor_idx >= len(sponsors):
                break
                
            sponsor_info = sponsors[sponsor_idx]
            sponsor_idx += 1
            
            # Calculate position
            x = row_offset_x + col_idx * (logo_width + padding_x)
            y = row_idx * (logo_height + padding_y)
            
            sponsor_file = sponsor_info["file"]
            sponsor_name = sponsor_info["name"]
            sponsor_path = os.path.join(sponsors_dir, sponsor_file)
            
            if not os.path.exists(sponsor_path):
                print(f"Warning: {sponsor_path} not found, skipping {sponsor_name}")
                continue
                
            print(f"Processing {sponsor_name} at row {row_idx}, col {col_idx}...")
            
            with open(sponsor_path, 'r') as f:
                sponsor_svg = f.read()
            
            # Create a group for this sponsor
            svg_content += f'''    <g
       id="sponsor-{sponsor_idx-1}-{sponsor_name.lower().replace(" ", "-")}"
       inkscape:label="{sponsor_name}"
       transform="translate({x},{y})">
      <rect
         style="fill:#ffffff;fill-opacity:1;stroke:none"
         width="{logo_width}"
         height="{logo_height}"
         x="0"
         y="0" />
'''
            
            # Extract the content from the sponsor SVG
            inner_content_match = re.search(r'<svg[^>]*>(.*)</svg>', sponsor_svg, re.DOTALL)
            if inner_content_match:
                inner_content = inner_content_match.group(1)
                
                # Get original dimensions
                orig_width, orig_height = extract_svg_dimensions(sponsor_svg)
                if not orig_width or not orig_height:
                    orig_width = logo_width
                    orig_height = logo_height
                
                # Calculate scale to fit
                scale_x = logo_width / orig_width
                scale_y = logo_height / orig_height
                scale = min(scale_x, scale_y) * 0.8  # 80% to add some padding
                
                # Center the logo
                offset_x = (logo_width - orig_width * scale) / 2
                offset_y = (logo_height - orig_height * scale) / 2
                
                svg_content += f'''      <g transform="translate({offset_x},{offset_y}) scale({scale})">
{inner_content}
      </g>
'''
            
            svg_content += '    </g>\n'
    
    svg_content += '''  </g>
</svg>'''
    
    # Write the output
    with open(output_file, 'w') as f:
        f.write(svg_content)
    
    print(f'\nCreated {output_file}')
    print(f'Final size: {canvas_width}mm x {canvas_height}mm')


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    
    sponsors_dir = sys.argv[1]
    output_file = sys.argv[2]
    
    if not os.path.isdir(sponsors_dir):
        print(f"Error: {sponsors_dir} is not a directory")
        sys.exit(1)
    
    generate_sponsors_svg(sponsors_dir, output_file)
