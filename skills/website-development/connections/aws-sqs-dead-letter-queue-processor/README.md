# Aws Sqs Dead Letter Queue Processor

## Description
Implements Amazon SQS message consumption with Dead Letter Queues (DLQ) and exponential redrive. Use when building resilient asynchronous microservice message pipelines.

## Purpose
Poison pill messages can crash queue consumers repeatedly. Dead Letter Queues isolate failing messages after maximum receive counts, allowing inspection while keeping the main queue flowing.

## When to Use
- When executing aws sqs dead letter queue processor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AWS SQS, Dead Letter Queue (DLQ)) cannot be provisioned.

## Supported Technologies
- AWS SQS
- Dead Letter Queue (DLQ)
- Message Redrive
- Cloud Messaging

## Example Use Cases
### Payment Processing Queue Fault Isolation
Isolating malformed billing messages into a DLQ without blocking 50,000 valid transaction payments.

### Third-Party Webhook Delivery Queue
Retrying webhook dispatch to offline client servers before parking dead messages in a DLQ for manual retry.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AWS SQS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
