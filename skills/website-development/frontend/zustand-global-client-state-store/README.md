# Zustand Global Client State Store

## Description
Manages lightweight global client state and local storage persistence using Zustand stores. Use when building modular client state stores without Redux boilerplate.

## Purpose
Redux requires verbose actions and reducers. Zustand provides a minimalist, hook-based state management store with zero boilerplate, supporting atomic state selectors and middleware persistence.

## When to Use
- When executing zustand global client state store in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Zustand, React State Management) cannot be provisioned.

## Supported Technologies
- Zustand
- React State Management
- LocalStorage Persistence
- TypeScript

## Example Use Cases
### Shopping Cart Client State Management
Managing shopping cart items, quantities, and discounts with automatic persistence across page reloads.

### User Interface Sidebar Collapse State
Sharing sidebar open/close state between header components and layout containers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Zustand) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://zustand.docs.pmnd.rs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
