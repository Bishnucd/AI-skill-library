# Flutter Bloc State Management

## Description
Structures enterprise Flutter applications using the BLoC (Business Logic Component) pattern. Use when managing complex, predictable state transitions in production Flutter apps.

## Purpose
The BLoC pattern decouples presentation UI from business logic using reactive Streams, converting incoming Events into predictable, testable State streams.

## When to Use
- When executing flutter bloc state management in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Flutter / Dart, flutter_bloc) cannot be provisioned.

## Supported Technologies
- Flutter / Dart
- flutter_bloc
- State Management
- Streams

## Example Use Cases
### Complex Checkout State Machines
Managing multi-step shipping, billing, and payment processing states cleanly in Flutter.

### Testable Mobile Business Logic
Unit testing all business logic permutations without instantiating Flutter UI widgets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Flutter / Dart) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://bloclibrary.dev/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
