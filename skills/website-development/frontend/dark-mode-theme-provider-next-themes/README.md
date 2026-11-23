# Dark Mode Theme Provider Next Themes

## Description
Implements zero-flash light, dark, and system theme switching using next-themes and CSS variables. Use when delivering flicker-free theme switching across React and Next.js applications.

## Purpose
Naive theme implementations flash a white screen when reloading in dark mode. next-themes injects a tiny synchronous script before DOM hydration, ensuring immediate correct theme application.

## When to Use
- When executing dark mode theme provider next themes in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (next-themes, Dark Mode) cannot be provisioned.

## Supported Technologies
- next-themes
- Dark Mode
- Zero-Flash (FOUC)
- CSS Variables

## Example Use Cases
### Seamless OS System Theme Matching
Automatically matching the website theme to user operating system dark/light preferences in real time.

### Flicker-Free Dark Theme Toggle
Providing users with a persistent light/dark/system theme dropdown with zero page reload flash.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (next-themes) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/pacocoursey/next-themes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
