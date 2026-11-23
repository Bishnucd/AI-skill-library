# Huddle Virtual Office Room Routing

## Description
Routes peer-to-peer audio and video mesh connections for virtual office spaces using WebRTC and LiveKit. Use when building spontaneous drop-in voice rooms and office huddles.

## Purpose
Spontaneous team huddles require instant connection without calendar friction. LiveKit provides an open-source WebRTC Selective Forwarding Unit (SFU) for low-latency drop-in team audio rooms.

## When to Use
- When executing huddle virtual office room routing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (LiveKit, WebRTC) cannot be provisioned.

## Supported Technologies
- LiveKit
- WebRTC
- Selective Forwarding Unit (SFU)
- TypeScript

## Example Use Cases
### Virtual Remote Co-Working Huddles
Enabling remote engineers to click an avatar to instantly drop into quick voice huddles.

### Pair Programming Audio Rooms
Providing crystal-clear low-latency voice channels during collaborative coding sessions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (LiveKit) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.livekit.io/home/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
