# Fastlane Ios Testflight Deploy

## Description
Automates iOS build versioning, provisioning profile synchronization, and TestFlight beta distribution using Fastlane. Use when automating iOS continuous deployment pipelines.

## Purpose
iOS deployment often breaks due to expired provisioning profiles and manual archive steps. Fastlane automates certificate sync via Match, increments build numbers, builds IPAs, and ships to TestFlight.

## When to Use
- When executing fastlane ios testflight deploy in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (iOS, Fastlane) cannot be provisioned.

## Supported Technologies
- iOS
- Fastlane
- Match
- Ruby / GitHub Actions

## Example Use Cases
### Automated Beta Deployment
Pushing daily build archives to QA testers on TestFlight automatically.

### Certificate Sync Across Teams
Preventing code-signing conflicts across distributed iOS developer teams.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (iOS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.fastlane.tools/actions/upload_to_testflight/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
