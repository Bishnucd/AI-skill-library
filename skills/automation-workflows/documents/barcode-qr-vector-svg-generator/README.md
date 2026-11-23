# Barcode Qr Vector Svg Generator

## Description
Generates crisp vector SVG barcodes (UPC, Code128) and QR codes with embedded logos and error correction. Use when generating physical shipping labels, packaging, and digital tickets.

## Purpose
Rasterized bitmap barcodes blur when printed, causing warehouse scanner failures. Generating barcodes as pure vector SVGs guarantees infinite scalability and razor-sharp print resolution.

## When to Use
- When executing barcode qr vector svg generator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (python-barcode, qrcode) cannot be provisioned.

## Supported Technologies
- python-barcode
- qrcode
- SVG Vector
- Python

## Example Use Cases
### Shipping Label Generation
Rendering crisp Code128 carrier tracking barcodes on 4x6 thermal shipping labels.

### Branded Marketing QR Flyers
Creating branded QR codes with embedded corporate logos for print marketing posters.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (python-barcode) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/gtaylor/python-barcode
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
