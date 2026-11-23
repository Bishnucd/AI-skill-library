# Amp For Email Dynamic Components

## Description
Authors interactive AMP for Email components (carousels, live forms, real-time accordions). Use when building dynamic interactive emails that allow users to take action inside Gmail.

## Purpose
Standard emails are static snapshots. AMP for Email allows interactive form submissions (e.g. submitting a survey or approving an expense) directly inside the email without opening web browsers.

## When to Use
- When executing amp for email dynamic components in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AMP for Email, HTML) cannot be provisioned.

## Supported Technologies
- AMP for Email
- HTML
- REST API
- Gmail / Yahoo

## Example Use Cases
### In-Email Survey Submission
Allowing customers to submit star ratings and comments directly within their Gmail client.

### One-Click Manager Approval
Permitting managers to approve or reject expense claims with a single click inside an email.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AMP for Email) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://amp.dev/documentation/guides-and-tutorials/learn/email-spec/amp-email-format/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
