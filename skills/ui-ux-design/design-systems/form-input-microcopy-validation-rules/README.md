# Form Input Microcopy Validation Rules

## Description
Crafts accessible, assistive form input microcopy, helper text, and inline error validation states. Use when designing user-friendly forms that reduce user input errors.

## Purpose
Vague error messages ("Invalid entry") cause user frustration. Effective form design uses persistent visible labels, clear helper text explaining constraints, and descriptive inline error messages.

## When to Use
- When executing form input microcopy validation rules in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Form Design, Microcopy) cannot be provisioned.

## Supported Technologies
- Form Design
- Microcopy
- Inline Validation
- Accessible Forms (ARIA)

## Example Use Cases
### Checkout Credit Card Form Usability Redesign
Replacing cryptic error messages with clear instructions, reducing payment input errors by 30%.

### Password Creation Flow Microcopy
Displaying real-time validation checklist icons that turn green as users satisfy password criteria.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Form Design) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.nngroup.com/articles/form-design-placeholders/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
