# Live Transcription Websocket Streamer

## Description
Streams live microphone audio chunks over WebSockets to real-time speech-to-text APIs (Deepgram, AssemblyAI). Use when displaying live real-time captions during ongoing meetings.

## Purpose
Displaying real-time subtitles requires low-latency streaming. Slicing microphone audio into 100ms Linear PCM chunks and streaming over WebSockets returns partial transcripts with sub-300ms latency.

## When to Use
- When executing live transcription websocket streamer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WebSockets, Deepgram API) cannot be provisioned.

## Supported Technologies
- WebSockets
- Deepgram API
- Linear PCM Audio
- TypeScript

## Example Use Cases
### Live Meeting Closed Captions
Displaying instantaneous subtitles during virtual team meetings for hearing accessibility.

### Real-Time Telephony Transcription
Transcribing customer support phone calls in real time for live agent assistance.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WebSockets) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.deepgram.com/docs/getting-started-with-live-streaming-audio
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
