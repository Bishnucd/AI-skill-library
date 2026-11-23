# Feature Sunset Deprecation Migration Playbook

## Description
Executes structured feature deprecation and customer migration lifecycles with phased milestone communications. Use when safely retiring legacy features without triggering customer backlash.

## Purpose
Retiring unused features is essential to maintain engineering velocity. A deprecation playbook establishes structured milestones: Announcement, Read-Only State, In-App Warnings, and Sunset Date.

## When to Use
- When executing feature sunset deprecation migration playbook in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Feature Sunsetting, Deprecation Playbook) cannot be provisioned.

## Supported Technologies
- Feature Sunsetting
- Deprecation Playbook
- Change Management
- Customer Communication

## Example Use Cases
### Legacy REST API v1 Sunset Execution
Guiding 500 enterprise customers through migrating to REST API v2 over a 9-month phased sunset.

### Unused Analytics Report Module Retirement
Retiring a slow, expensive reporting tab used by only 0.2% of active monthly accounts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Feature Sunsetting) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.productplan.com/glossary/feature-sunsetting/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
