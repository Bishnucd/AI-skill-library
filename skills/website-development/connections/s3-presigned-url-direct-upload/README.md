# S3 Presigned Url Direct Upload

## Description
Generates secure AWS S3 presigned PUT URLs for direct browser-to-storage client file uploads. Use when uploading large files without routing gigabytes through backend application servers.

## Purpose
Routing large file uploads (videos, high-res images) through backend servers wastes bandwidth and blocks threads. Presigned URLs allow clients to upload directly to S3 with strict size and type limits.

## When to Use
- When executing s3 presigned url direct upload in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AWS S3, AWS SDK v3) cannot be provisioned.

## Supported Technologies
- AWS S3
- AWS SDK v3
- Node.js / Python
- CORS

## Example Use Cases
### Large Video Ingestion
Allowing users to upload 2GB video recordings directly to cloud storage.

### Secure Document Uploads
Enabling users to upload encrypted identity documents directly into private S3 buckets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AWS S3) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
