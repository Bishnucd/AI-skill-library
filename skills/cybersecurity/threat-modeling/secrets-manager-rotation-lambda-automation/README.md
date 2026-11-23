# Secrets Manager Rotation Lambda Automation

## Description
Configures automated, periodic database credential rotation using AWS Secrets Manager and rotation Lambda functions. Use when enforcing 30-day credential rotation policies.

## Purpose
Static database passwords violate compliance standards and increase breach risk. AWS Secrets Manager rotates credentials through createSecret, setSecret, testSecret, and finishSecret stages automatically.

## When to Use
- When executing secrets manager rotation lambda automation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AWS Secrets Manager, AWS Lambda) cannot be provisioned.

## Supported Technologies
- AWS Secrets Manager
- AWS Lambda
- RDS PostgreSQL / MySQL
- Python

## Example Use Cases
### Automated Database Password Rotation
Rotating all production PostgreSQL passwords every 30 days without manual downtime.

### PCI-DSS Compliance Adherence
Fulfilling payment card industry mandates for regular administrative credential rotation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AWS Secrets Manager) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
