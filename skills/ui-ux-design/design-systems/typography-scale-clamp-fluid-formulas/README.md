# Typography Scale Clamp Fluid Formulas

## Description
Constructs fluid typography scales using CSS clamp() formulas that scale smoothly across viewports. Use when eliminating jarring media query font size jumps in responsive design.

## Purpose
Using discrete media queries causes sudden font size jumps on window resizing. CSS clamp() interpolates font sizes smoothly between minimum mobile sizes and maximum desktop sizes using viewport units.

## When to Use
- When executing typography scale clamp fluid formulas in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Fluid Typography, CSS clamp()) cannot be provisioned.

## Supported Technologies
- Fluid Typography
- CSS clamp()
- Typography Scale
- Responsive Design

## Example Use Cases
### Marketing Landing Page Fluid Hero Headline
Scaling an H1 headline smoothly from 2.5rem on mobile to 5.0rem on ultrawide monitors without media queries.

### Editorial Blog Typography Scalability
Providing consistent reading line length and optical typography proportions across tablets and phones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Fluid Typography) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
