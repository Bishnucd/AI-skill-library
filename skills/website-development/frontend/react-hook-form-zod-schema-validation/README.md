# React Hook Form Zod Schema Validation

## Description
Builds high-performance, uncontrolled form state with Zod schema validation using React Hook Form. Use when creating complex forms without unnecessary component re-renders.

## Purpose
Controlled form state (useState on every keystroke) triggers costly re-renders on every character typed. React Hook Form uses uncontrolled inputs with ref registration and Zod schema validation.

## When to Use
- When executing react hook form zod schema validation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (React Hook Form, Zod) cannot be provisioned.

## Supported Technologies
- React Hook Form
- Zod
- Form Validation
- Performance

## Example Use Cases
### Multi-Step User Registration Form
Validating email, password strength, and address fields with instant feedback without input lag.

### Complex Enterprise Settings Form
Managing forms with 50+ configuration fields while maintaining steady 60 FPS typing performance.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (React Hook Form) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://react-hook-form.com/get-started#SchemaValidation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
