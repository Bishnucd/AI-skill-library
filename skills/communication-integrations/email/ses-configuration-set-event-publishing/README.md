# Ses Configuration Set Event Publishing

## Description
Routes Amazon SES email delivery, bounce, and complaint telemetry to Kinesis and SNS topics. Use when building enterprise email analytics and deliverability monitoring pipelines.

## Purpose
Amazon SES Configuration Sets allow granular tracking of email events. Routing event metrics to Kinesis streams enables real-time analytics dashboards and automatic sender pause rules.

## When to Use
- When executing ses configuration set event publishing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Amazon SES, AWS SNS / Kinesis) cannot be provisioned.

## Supported Technologies
- Amazon SES
- AWS SNS / Kinesis
- CloudWatch
- Terraform

## Example Use Cases
### Real-Time Engagement Tracking
Monitoring email open rates and link click tracking across marketing campaigns.

### Reputation Killswitch Automation
Automatically freezing campaign queues if spam complaint rates spike dangerously.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Amazon SES) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
