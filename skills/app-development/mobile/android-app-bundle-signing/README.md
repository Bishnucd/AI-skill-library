# Android App Bundle Signing

## Description
Builds, optimizes, and cryptographically signs Android App Bundles (AAB) for Google Play distribution. Use when preparing Android applications for Play Console release tracks.

## Purpose
Google Play requires Android App Bundles (AAB) for dynamic feature delivery and device-optimized APK generation. Bundles must be compiled via release Gradle tasks and signed with upload keys.

## When to Use
- When executing android app bundle signing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Android SDK, Gradle) cannot be provisioned.

## Supported Technologies
- Android SDK
- Gradle
- bundletool
- Java Keytool / apksigner

## Example Use Cases
### Google Play Release Preparation
Building signed production AABs ready for internal, alpha, or production tracks.

### Binary Size Optimization
Using R8 resource shrinking to minimize downloaded APK sizes across user devices.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Android SDK) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.android.com/guide/app-bundle
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
