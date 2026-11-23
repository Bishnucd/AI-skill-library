# PRD Template Scoping

## Description
Structured methodology and prompt instructions for drafting comprehensive, unambiguous Product Requirements Documents (PRDs).

## Purpose
Ensures that product initiatives begin with crystal-clear problem statements, measurable KPIs, detailed acceptance criteria, and strict out-of-scope boundaries to guide engineering implementation.

## When to Use
- Kicking off a major feature or new product build before engineering design begins.
- Aligning cross-functional stakeholders (design, backend, frontend, legal, support) on project scope.
- Preventing scope creep during sprint planning.

## When NOT to Use
- Minor bug fixes or routine maintenance tasks (use standard issue tickets).
- Low-fidelity brainstorming sessions prior to problem validation.

## Supported Technologies
- Product tools: Jira, Linear, Notion, Confluence, Coda
- Specification formats: Markdown, Gherkin BDD

## Dependencies
- Customer feedback data, analytics baselines, or strategic business goals.

## Example Use Cases
### Use Case 1: Multi-Factor Authentication Rollout
Authoring a PRD for mandatory SMS and TOTP MFA enforcement across enterprise accounts, detailing fallback mechanisms and support recovery workflows.

### Use Case 2: Dark Mode Theming
Scoping user preferences, system theme detection, and WCAG contrast conformance for mobile and desktop applications.

## Usage Instructions
1. State the user problem and quantify the business opportunity.
2. Define primary success metrics and operational guardrail metrics.
3. Detail user journeys with BDD acceptance criteria.
4. Establish clear In-Scope and Out-of-Scope boundaries.

## Limitations
- A PRD outlines *what* and *why*; it does not dictate internal software architecture or database schemas (which belong in an Architecture Decision Record).

## Source and Attribution
- **Original Source:** Silicon Valley Product Group (SVPG) & Modern Agile PRD Frameworks
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
