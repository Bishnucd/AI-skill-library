# Microinteraction Motion Curve Specification

## Description
Defines standardized cubic-bezier easing curves and duration tokens for cohesive UI animations. Use when crafting polished microinteractions and transitions in design systems.

## Purpose
Linear animations feel robotic. Specifying standardized easing curves (Standard, Decelerate for entrances, Accelerate for exits) and duration tokens (150ms–300ms) creates natural, responsive physics.

## When to Use
- When executing microinteraction motion curve specification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Motion Design, Cubic-Bezier Easing) cannot be provisioned.

## Supported Technologies
- Motion Design
- Cubic-Bezier Easing
- Microinteractions
- Design Tokens

## Example Use Cases
### Dropdown Menu Expansion Animation
Animating a dropdown expansion using ease-decelerate at 200ms for an immediate, responsive feel.

### Accessible Motion Design Token Implementation
Automatically disabling non-essential motion transitions when users enable reduced-motion in OS settings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Motion Design) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
