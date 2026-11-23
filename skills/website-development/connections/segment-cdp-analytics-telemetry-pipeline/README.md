# Segment Cdp Analytics Telemetry Pipeline

## Description
Instruments customer data platform (CDP) telemetry using Segment Analytics.js track and identify calls. Use when routing customer behavioral data to multiple analytics and marketing tools.

## Purpose
Adding separate SDKs for Google Analytics, Mixpanel, Amplitude, and Facebook Pixels slows down page loads. Segment provides a single unified API that routes events to hundreds of destinations.

## When to Use
- When executing segment cdp analytics telemetry pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Segment CDP, Analytics.js) cannot be provisioned.

## Supported Technologies
- Segment CDP
- Analytics.js
- Customer Telemetry
- Event Routing

## Example Use Cases
### Unified Growth Analytics Event Tracking
Sending signup and conversion events to Mixpanel, Google Ads, and Salesforce simultaneously via one call.

### Customer Behavioral Telemetry Audit
Tracking feature usage across user cohorts to identify indicators of customer churn.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Segment CDP) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
