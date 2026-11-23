# Braintrust Eval Logger

## Description
Logs agent execution spans and runs regression evaluation experiments using Braintrust SDK. Use when tracking agent performance, costs, and output quality across versions.

## Purpose
Braintrust provides end-to-end logging, dataset management, and automated evaluation for AI applications, enabling teams to detect regressions before they reach customers.

## When to Use
- When executing braintrust eval logger in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Braintrust SDK, TypeScript / Python) cannot be provisioned.

## Supported Technologies
- Braintrust SDK
- TypeScript / Python
- REST
- OpenAI

## Example Use Cases
### Dataset Version Management
Curating production edge-case queries into permanent regression test datasets.

### Model Cost Profiling
Tracking token expenditure and cost-per-turn trends across model upgrades.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Braintrust SDK) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.braintrust.dev/docs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
