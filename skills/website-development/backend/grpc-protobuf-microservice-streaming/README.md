# Grpc Protobuf Microservice Streaming

## Description
Implements bidirectional gRPC streaming RPCs with Protocol Buffers in Go and Node.js. Use when building low-latency, high-throughput inter-service microservice communication.

## Purpose
REST over HTTP/1.1 incurs heavy serialization and header overhead. gRPC uses binary Protobuf serialization over multiplexed HTTP/2 streams for sub-millisecond inter-service RPCs.

## When to Use
- When executing grpc protobuf microservice streaming in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (gRPC, Protocol Buffers) cannot be provisioned.

## Supported Technologies
- gRPC
- Protocol Buffers
- HTTP/2
- Microservices

## Example Use Cases
### Real-Time Financial Market Feed Streaming
Streaming live stock ticker updates between internal order-matching engines over gRPC.

### IoT Fleet Telemetry Ingestion Service
Receiving continuous binary sensor telemetry streams from 10,000 edge devices simultaneously.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (gRPC) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
