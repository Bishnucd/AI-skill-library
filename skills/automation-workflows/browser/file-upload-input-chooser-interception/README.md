# File Upload Input Chooser Interception

## Description
Intercepts native OS file chooser dialogues and programmatically attaches files to browser input elements. Use when automating file upload, image submission, and batch document importing.

## Purpose
Clicking file upload buttons opens OS native dialogs that freeze headless browser scripts. Playwright intercepts fileChooser events to supply local file paths directly to file input DOM elements.

## When to Use
- When executing file upload input chooser interception in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, fileChooser API) cannot be provisioned.

## Supported Technologies
- Playwright
- fileChooser API
- MIME Types
- Node.js

## Example Use Cases
### Batch Avatar Image Uploads
Automating profile photo uploads and crop adjustments in user settings tests.

### CSV Bulk Import Testing
Testing system behavior when uploading 10,000-row customer CSV spreadsheets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/input#upload-files
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
