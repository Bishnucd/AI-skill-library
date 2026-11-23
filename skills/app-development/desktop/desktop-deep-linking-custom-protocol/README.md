# Desktop Deep Linking Custom Protocol

## Description
Registers custom URI schemes (e.g. myapp://auth/callback) to handle deep links and web-to-desktop authentication. Use when completing OAuth redirects and web links in desktop apps.

## Purpose
Web browsers complete OAuth logins by redirecting to custom URI schemes. Registering protocols with the OS ensures clicks on web links launch or focus the desktop application.

## When to Use
- When executing desktop deep linking custom protocol in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Custom Protocols, Registry (Windows)) cannot be provisioned.

## Supported Technologies
- Custom Protocols
- Registry (Windows)
- plist (macOS)
- Desktop Entries (Linux)

## Example Use Cases
### Web-to-Desktop OAuth Callback
Seamlessly completing web login flows and passing authentication tokens into desktop software.

### Shared Link Navigation
Opening specific project files directly in the desktop app when users click web links.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Custom Protocols) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.electronjs.org/docs/latest/tutorial/launch-app-from-url-in-another-app
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
