# Design System Release Versioning Governance

## Description
Establishes SemVer versioning, deprecation policies, and RFC review governance for design systems. Use when managing enterprise component library releases across product teams.

## Purpose
Design systems fail when component updates break consuming applications unexpectedly. Strict Semantic Versioning (SemVer), Request for Comments (RFC) proposals, and deprecation cycles build trust.

## When to Use
- When executing design system release versioning governance in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Design System Governance, SemVer) cannot be provisioned.

## Supported Technologies
- Design System Governance
- SemVer
- RFC Process
- Deprecation Lifecycle

## Example Use Cases
### Enterprise Component Library v3 Migration
Guiding 40 product teams through a major design system upgrade with automated jscodeshift codemods.

### Cross-Squad Component Contribution RFC
Reviewing a proposed new DatePicker component contribution from a feature squad before merging into core.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Design System Governance) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://semver.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
