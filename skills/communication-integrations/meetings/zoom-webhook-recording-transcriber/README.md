# Zoom Webhook Recording Transcriber

## Description
Receives Zoom cloud recording webhooks, downloads video/audio assets, and triggers automated speech transcription. Use when ingesting meeting recordings for automatic summarization.

## Purpose
Automating meeting notes starts with secure webhook ingestion. Receiving recording.completed webhooks, verifying HMAC signatures, and dispatching transcription pipelines eliminates manual downloads.

## When to Use
- When executing zoom webhook recording transcriber in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Zoom Webhooks, Node.js) cannot be provisioned.

## Supported Technologies
- Zoom Webhooks
- Node.js
- Whisper / Google Speech API
- AWS S3

## Example Use Cases
### Meeting Intelligence Pipelines
Feeding recorded team standups directly into automated summary generators.

### Customer Call Archival
Archiving and indexing sales demonstration calls for compliance and training.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Zoom Webhooks) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.zoom.us/docs/api/rest/webhook-reference/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
