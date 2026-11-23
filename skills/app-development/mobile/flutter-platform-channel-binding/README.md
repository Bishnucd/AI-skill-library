# Flutter Platform Channel Binding

## Description
Implements type-safe method channels and event streams between Flutter Dart code and native platform runtimes. Use when integrating native iOS and Android SDKs into Flutter apps.

## Purpose
When Flutter plugins require hardware sensors, native SDKs, or background services, platform channels provide asynchronous binary messaging between Dart and native host platforms.

## When to Use
- When executing flutter platform channel binding in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Flutter / Dart, Kotlin / Swift) cannot be provisioned.

## Supported Technologies
- Flutter / Dart
- Kotlin / Swift
- MethodChannel
- Pigeon

## Example Use Cases
### Native Payment SDK Integration
Bridging native payment sheet views directly into Flutter user journeys.

### Hardware Sensor Telemetry
Streaming real-time accelerometer or Bluetooth LE data into Dart UI state.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Flutter / Dart) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.flutter.dev/platform-integration/platform-channels
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
