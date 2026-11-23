# Matrix Synapse Federated Chat Bot

## Description
Implements end-to-end encrypted bots on the federated Matrix protocol using matrix-js-sdk or matrix-nio. Use when deploying secure, sovereign communication bots for private networks.

## Purpose
The Matrix protocol provides decentralized, federated messaging with mandatory end-to-end encryption. Matrix bots authenticate with homeservers, manage cryptographic keys, and exchange encrypted events.

## When to Use
- When executing matrix synapse federated chat bot in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Matrix Protocol, Olm / Megolm E2EE) cannot be provisioned.

## Supported Technologies
- Matrix Protocol
- Olm / Megolm E2EE
- Python matrix-nio
- TypeScript

## Example Use Cases
### Sovereign Government Messaging
Deploying automated intelligence bots on private federated Matrix communication networks.

### Air-Gapped Ops Alerts
Sending operational server alerts to encrypted Matrix chat rooms in secure enclaves.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Matrix Protocol) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://matrix.org/docs/guides/matrix-js-sdk/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
