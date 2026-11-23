# Grpc Protobuf Service Definition

## Description
Authors protocol buffer service contracts and message definitions with backwards-compatibility checks. Use when designing low-latency, high-throughput microservice communication interfaces.

## Purpose
gRPC over HTTP/2 provides binary serialization, strongly-typed contracts, and bidirectional streaming. Proto3 definitions must adhere to field tag preservation rules for zero-downtime evolution.

## When to Use
- When executing grpc protobuf service definition in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Protocol Buffers proto3, gRPC) cannot be provisioned.

## Supported Technologies
- Protocol Buffers proto3
- gRPC
- buf CLI
- Go / Python / Java

## Example Use Cases
### Internal Service Contracts
Defining low-latency communication interfaces between microservices.

### Streaming Data Ingestion
Architecting bidirectional gRPC telemetry streaming channels.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Protocol Buffers proto3) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://protobuf.dev/programming-guides/proto3/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
