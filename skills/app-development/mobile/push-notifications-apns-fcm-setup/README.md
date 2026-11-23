# Push Notifications Apns Fcm Setup

## Description
Implements push notification token registration, background handlers, and APNs/FCM payload routing. Use when sending transactional and marketing notifications to iOS and Android apps.

## Purpose
Mobile push notifications require negotiating OS permissions, uploading APNs auth keys (.p8) to delivery gateways, storing device tokens, and handling background payload triggers.

## When to Use
- When executing push notifications apns fcm setup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Firebase Cloud Messaging (FCM), Apple APNs) cannot be provisioned.

## Supported Technologies
- Firebase Cloud Messaging (FCM)
- Apple APNs
- HTTP v1 API
- Mobile SDKs

## Example Use Cases
### Transactional Delivery Updates
Alerting users when food delivery couriers arrive at their location.

### Re-engagement Marketing
Sending personalized push promotions based on user activity milestones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Firebase Cloud Messaging (FCM)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://firebase.google.com/docs/cloud-messaging
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
