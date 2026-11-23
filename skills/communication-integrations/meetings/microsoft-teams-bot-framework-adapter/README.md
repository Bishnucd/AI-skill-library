# Microsoft Teams Bot Framework Adapter

## Description
Builds interactive Microsoft Teams bot adapters using the Microsoft Bot Framework SDK. Use when deploying conversational assistants and adaptive cards to Microsoft Teams.

## Purpose
Microsoft Teams bots interact via the Azure Bot Service, processing activity turns, rendering rich interactive Adaptive Cards, and managing 1:1 and channel conversational state.

## When to Use
- When executing microsoft teams bot framework adapter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Microsoft Bot Framework, Teams SDK) cannot be provisioned.

## Supported Technologies
- Microsoft Bot Framework
- Teams SDK
- Adaptive Cards
- C# / TypeScript

## Example Use Cases
### IT Service Desk Bot
Allowing employees to open and track IT support tickets directly inside Microsoft Teams.

### Meeting Poll Collector
Broadcasting interactive polling cards in team channels to gather feedback.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Microsoft Bot Framework) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learn.microsoft.com/en-us/microsoftteams/platform/bots/what-are-bots
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
