# Aws Ecs Fargate Task Deployment

## Description
Defines modular AWS ECS Fargate task definitions, service configurations, and Application Load Balancer target groups. Use when running serverless containers on AWS without managing EC2 nodes.

## Purpose
AWS Fargate runs containers serverless without managing underlying EC2 virtual machines. Task definitions specify container images, CPU/RAM allocations, IAM task execution roles, and logging.

## When to Use
- When executing aws ecs fargate task deployment in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AWS ECS, AWS Fargate) cannot be provisioned.

## Supported Technologies
- AWS ECS
- AWS Fargate
- Terraform / CloudFormation
- Docker

## Example Use Cases
### Serverless Container Hosting
Hosting microservices on AWS without patching or scaling underlying virtual machine fleets.

### Autoscaling Web Backends
Scaling container task instances automatically based on CPU utilization and ALB request count.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AWS ECS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
