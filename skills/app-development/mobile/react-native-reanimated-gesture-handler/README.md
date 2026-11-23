# React Native Reanimated Gesture Handler

## Description
Implements 60fps gesture-driven animations running on the native UI thread using React Native Reanimated. Use when crafting swipeable cards, bottom sheets, and interactive mobile gestures.

## Purpose
JavaScript-driven animations drop frames during heavy CPU tasks. Reanimated executes animation worklets directly on the native mobile UI thread, ensuring butter-smooth 60/120fps interactions.

## When to Use
- When executing react native reanimated gesture handler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (React Native Reanimated v3, Gesture Handler) cannot be provisioned.

## Supported Technologies
- React Native Reanimated v3
- Gesture Handler
- Worklets
- TypeScript

## Example Use Cases
### Interactive Bottom Sheets
Creating expandable modal drawer sheets that track user finger drags with zero lag.

### Swipe-to-Dismiss Lists
Building responsive swipeable list rows with haptic threshold triggers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (React Native Reanimated v3) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.swmansion.com/react-native-reanimated/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
