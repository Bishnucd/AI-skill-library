# File Upload S3 Presigned Post Policy

## Description
Generates Amazon S3 presigned POST policies with file size constraints, MIME type checks, and expiration. Use when allowing direct, secure client file uploads to S3 storage buckets.

## Purpose
Routing large file uploads through application servers consumes server bandwidth and memory. S3 presigned POST policies authorize client browsers to upload directly to S3 with strict constraints.

## When to Use
- When executing file upload s3 presigned post policy in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (S3 Presigned POST, Direct Upload) cannot be provisioned.

## Supported Technologies
- S3 Presigned POST
- Direct Upload
- AWS SDK
- Storage Security

## Example Use Cases
### User Avatar Direct S3 Upload
Allowing mobile and web users to upload profile pictures directly to AWS S3 without loading backend servers.

### Enforcing File Upload Size Limits Cryptographically
Preventing malicious users from uploading 100GB files by enforcing strict S3 cryptographic byte limits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (S3 Presigned POST) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
