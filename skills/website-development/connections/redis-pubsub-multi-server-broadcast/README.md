# Redis Pubsub Multi Server Broadcast

## Description
Broadcasts real-time notifications across multiple application servers using Redis Pub/Sub channels. Use when scaling WebSocket hubs across multiple horizontal backend nodes.

## Purpose
When clients connect to different server instances, Server A cannot push messages to clients on Server B directly. Redis Pub/Sub connects all server nodes into a unified broadcasting backplane.

## When to Use
- When executing redis pubsub multi server broadcast in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Redis Pub/Sub, Horizontal Scaling) cannot be provisioned.

## Supported Technologies
- Redis Pub/Sub
- Horizontal Scaling
- WebSocket Cluster
- Message Broadcasting

## Example Use Cases
### Multi-Node Live Chat Application
Relaying chat messages instantly between users connected to different autoscaling server pods.

### Global Collaborative Board Synchronization
Syncing live drawing whiteboard canvas strokes across distributed regional application servers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Redis Pub/Sub) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://redis.io/docs/latest/develop/interact/pubsub/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
