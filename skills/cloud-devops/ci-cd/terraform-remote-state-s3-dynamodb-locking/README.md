# Terraform Remote State S3 Dynamodb Locking

## Description
Configures secure remote Terraform state storage in AWS S3 with state locking via DynamoDB. Use when enabling collaborative, race-condition-free infrastructure as code.

## Purpose
Storing Terraform state locally risks data loss and concurrent conflicting apply operations. Storing state in versioned S3 buckets with DynamoDB locking prevents simultaneous mutations.

## When to Use
- When executing terraform remote state s3 dynamodb locking in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Terraform, AWS S3) cannot be provisioned.

## Supported Technologies
- Terraform
- AWS S3
- AWS DynamoDB
- HCL

## Example Use Cases
### Team Infrastructure Collaboration
Preventing state corruption when two engineers run terraform apply simultaneously.

### State History Disaster Recovery
Restoring historical infrastructure snapshots using S3 object versioning.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Terraform) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.hashicorp.com/terraform/language/settings/backends/s3
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
