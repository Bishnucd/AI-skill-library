# Github Actions Oidc Aws Federation

## Description
Configures OpenID Connect (OIDC) authentication between GitHub Actions and AWS IAM without storing long-lived AWS secret access keys. Use when securing cloud deployment pipelines.

## Purpose
Storing static AWS credentials in repository secrets risks credential leakage. GitHub Actions OIDC exchanges short-lived JWT tokens for temporary AWS STS credentials based on repo and branch claims.

## When to Use
- When executing github actions oidc aws federation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GitHub Actions, AWS IAM OIDC) cannot be provisioned.

## Supported Technologies
- GitHub Actions
- AWS IAM OIDC
- CloudFormation / Terraform
- YAML

## Example Use Cases
### Secure Serverless Deployment
Deploying AWS Lambda functions from GitHub Actions with zero stored access keys.

### Multi-Account AWS Deployment
Assuming specific AWS roles per staging and production environment branches.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GitHub Actions) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
