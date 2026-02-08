# Sponsors SVG Generator

This directory contains scripts to generate the sponsors-center.svg file from individual sponsor logos.

## generate_sponsors_svg.py

Python script that creates a composite SVG with sponsor logos arranged in a 3-2-3 layout:
- Row 1: 3 logos
- Row 2: 2 logos (centered)
- Row 3: 3 logos

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

### Customization

To change the layout or add/remove sponsors, edit the `sponsors` list in the script:

```python
sponsors = [
    {"file": "agorapulse.svg", "name": "Agorapulse"},
    {"file": "renault-digital.svg", "name": "Renault Digital"},
    # ... add more sponsors here
]
```

You can also adjust:
- `logo_width` and `logo_height`: Size of each logo box (in mm)
- `padding_x` and `padding_y`: Spacing between logos (in mm)
- `layout`: Array defining number of logos per row (e.g., `[3, 2, 3]`)

### Output

The script generates an SVG file (340mm × 205mm) with:
- Proper XML namespaces for Inkscape, Sodipodi, RDF, CC, and DC
- Each logo scaled and centered within its box
- White background rectangles for each logo slot
- Inkscape labels for easy editing
