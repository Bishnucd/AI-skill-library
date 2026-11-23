# Minio S3 Lakehouse Object Storage

## Description
Deploys and optimizes enterprise S3-compatible lakehouse storage infrastructure using MinIO. Use when running high-performance on-premise or hybrid cloud data lakes.

## Purpose
MinIO provides ultra-fast, S3-compliant distributed object storage built for high-throughput analytical workloads, serving as an on-premise replacement for AWS S3 with Iceberg and Delta Lake.

## When to Use
- When executing minio s3 lakehouse object storage in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (MinIO, S3 API) cannot be provisioned.

## Supported Technologies
- MinIO
- S3 API
- Distributed Storage
- Lakehouse

## Example Use Cases
### On-Premise Kubernetes Data Lakehouse
Backing Apache Iceberg lakehouses with 10Gbps local MinIO storage in private data centers.

### Air-Gapped Government Data Analytics
Hosting secure S3-compliant storage for intelligence analytics in offline environments.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (MinIO) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://min.io/docs/minio/linux/index.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
