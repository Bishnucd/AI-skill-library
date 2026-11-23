# Camera Hardware Qr Barcode Scanner

## Description
Configures high-speed native camera hardware feeds and barcode/QR detection using ML Kit or VisionKit. Use when building mobile scanning, ticketing, or physical item lookup interfaces.

## Purpose
Scanning QR codes requires configuring native camera preview streams, selecting optimal resolution targets, running machine vision models on frame buffers, and providing tactile haptic feedback.

## When to Use
- When executing camera hardware qr barcode scanner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google ML Kit, Apple Vision / VisionKit) cannot be provisioned.

## Supported Technologies
- Google ML Kit
- Apple Vision / VisionKit
- CameraX / AVFoundation
- Mobile

## Example Use Cases
### Event Ticket Validation
Scanning attendee QR tickets at entrance gates in under 200ms per person.

### Retail Inventory Barcode Lookup
Allowing store associates to scan product UPC codes to check warehouse stock levels.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google ML Kit) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/ml-kit/vision/barcode-scanning
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
