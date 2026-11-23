# Terraform Aws Vpc Infrastructure

## Description
Provisions modular, multi-AZ VPC network infrastructure with private and public subnets via Terraform. Use when deploying secure foundational cloud network infrastructure on AWS.

## Purpose
Production cloud architectures require isolated public and private subnet topologies across at least two Availability Zones with managed NAT Gateways for outbound egress.

## When to Use
- When executing terraform aws vpc infrastructure in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Terraform / OpenTofu, AWS VPC) cannot be provisioned.

## Supported Technologies
- Terraform / OpenTofu
- AWS VPC
- NAT Gateway
- HCL

## Example Use Cases
### Greenfield Cloud Deployment
Bootstrapping new production cloud environments with standard enterprise networking.

### Compliance Network Segregation
Isolating database subnets with no route to internet gateways.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Terraform / OpenTofu) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://registry.terraform.io/modules/terraform-aws-modules/vpc/aws/latest
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
