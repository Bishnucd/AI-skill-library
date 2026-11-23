# Mobile App Privacy Manifest Audit

## Description
Audits iOS Privacy Manifests (PrivacyInfo.xcprivacy) and Android Data Safety forms for tracking compliance. Use when meeting mandatory Apple and Google privacy disclosure rules.

## Purpose
Apple and Google reject apps lacking declared privacy manifests. Identifying required reason APIs (UserDefaults, disk space, file timestamps) and third-party SDK data practices ensures compliance.

## When to Use
- When executing mobile app privacy manifest audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PrivacyInfo.xcprivacy, Android Data Safety) cannot be provisioned.

## Supported Technologies
- PrivacyInfo.xcprivacy
- Android Data Safety
- Xcode 15+
- App Store Connect

## Example Use Cases
### Apple Store Review Clearance
Eliminating privacy manifest rejections during iOS app store submission.

### Third-Party SDK Compliance Verification
Ensuring advertising and analytics SDKs do not execute undeclared device fingerprinting.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PrivacyInfo.xcprivacy) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/documentation/bundleresources/privacy_manifest_files
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
