# Allure Test Reporting Framework Adapter

## Description
Generates rich interactive test reports with execution steps, screenshots, and failure traces using Allure Report. Use when standardizing test reporting across heterogeneous test frameworks.

## Purpose
Allure Report provides a unified, beautiful HTML reporting dashboard that aggregates results from Pytest, Jest, Playwright, and JUnit, detailing execution history, flakiness, and attachments.

## When to Use
- When executing allure test reporting framework adapter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Allure Report, Test Analytics) cannot be provisioned.

## Supported Technologies
- Allure Report
- Test Analytics
- CI/CD Reporting
- Heterogeneous Frameworks

## Example Use Cases
### Enterprise Multi-Team Test Health Dashboard
Aggregating test execution results from 12 squads into a unified daily executive QA dashboard.

### Flaky Test Root Cause Investigation
Analyzing step-by-step logs and embedded video recordings to diagnose intermittent test timing bugs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Allure Report) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://allurereport.org/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
