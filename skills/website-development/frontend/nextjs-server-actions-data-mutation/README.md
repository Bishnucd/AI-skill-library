# Nextjs Server Actions Data Mutation

## Description
Implements type-safe data mutations and progressive enhancement using Next.js App Router Server Actions. Use when building interactive web forms with server-side validation and revalidation.

## Purpose
Server Actions allow frontend components to invoke asynchronous server functions directly without authoring boilerplate API routes. Integrated cache revalidation updates UI states automatically.

## When to Use
- When executing nextjs server actions data mutation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Next.js 14/15, React Server Components) cannot be provisioned.

## Supported Technologies
- Next.js 14/15
- React Server Components
- Zod
- TypeScript

## Example Use Cases
### Interactive Form Mutations
Submitting user profile updates with instant server-side validation and optimistic UI updates.

### Progressive Enhancement
Ensuring essential web forms function seamlessly even before client-side JavaScript has finished loading.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Next.js 14/15) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
