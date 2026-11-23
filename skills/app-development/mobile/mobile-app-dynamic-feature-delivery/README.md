# Mobile App Dynamic Feature Delivery

## Description
Configures on-demand dynamic feature modules and split APK delivery using Google Play Feature Delivery. Use when reducing initial download size and downloading heavy features on demand.

## Purpose
Giant app download sizes crush conversion rates. Dynamic feature delivery allows apps to split out heavy features (e.g. video editors, AR filters) and download them on-demand after installation.

## When to Use
- When executing mobile app dynamic feature delivery in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Play Feature Delivery, Android Dynamic Modules) cannot be provisioned.

## Supported Technologies
- Play Feature Delivery
- Android Dynamic Modules
- Gradle
- Play Core SDK

## Example Use Cases
### Initial APK Size Reduction
Reducing base app download size from 120MB down to 18MB to boost Play Store install rates.

### Heavy AR Filter On-Demand Download
Downloading heavy 3D camera filter assets only when users navigate to the camera screen.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Play Feature Delivery) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.android.com/guide/playcore/feature-delivery
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
