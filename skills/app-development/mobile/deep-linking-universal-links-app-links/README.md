# Deep Linking Universal Links App Links

## Description
Configures Apple Universal Links and Android App Links for seamless web-to-app redirection. Use when routing standard HTTPS web links directly into native mobile application views.

## Purpose
Universal Links ensure standard web URLs (https://example.com/item/123) open directly in native apps rather than web browsers, without clumsy JavaScript redirect prompts or broken links.

## When to Use
- When executing deep linking universal links app links in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Universal Links, Android App Links) cannot be provisioned.

## Supported Technologies
- Universal Links
- Android App Links
- apple-app-site-association
- assetlinks.json

## Example Use Cases
### Marketing Email Campaign Routing
Routing users directly into product detail mobile screens from promotional email links.

### Social Media Shared Content
Opening shared social posts natively in the app when clicked from external chat apps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Universal Links) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/ios/universal-links/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
