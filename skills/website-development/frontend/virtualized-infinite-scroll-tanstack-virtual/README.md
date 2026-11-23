# Virtualized Infinite Scroll Tanstack Virtual

## Description
Renders 100,000 tabular rows smoothly with 60 FPS scrolling using TanStack Virtual. Use when rendering massive datasets without crashing browser DOM memory.

## Purpose
Rendering 10,000 DOM nodes freezes browser rendering. TanStack Virtual measures scroll position and renders only the 20–30 items currently visible in the viewport with absolute positioning.

## When to Use
- When executing virtualized infinite scroll tanstack virtual in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (TanStack Virtual, DOM Virtualization) cannot be provisioned.

## Supported Technologies
- TanStack Virtual
- DOM Virtualization
- Infinite Scrolling
- Performance

## Example Use Cases
### High-Volume Financial Order Book Table
Scrolling through 100,000 real-time trade records at steady 60 FPS without dropping frames.

### Infinite Social Media Feed Virtualization
Recycling DOM nodes as users scroll infinitely down a social media image feed.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (TanStack Virtual) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://tanstack.com/virtual/latest
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
