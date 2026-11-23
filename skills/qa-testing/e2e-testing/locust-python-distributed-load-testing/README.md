# Locust Python Distributed Load Testing

## Description
Writes scalable, code-driven user load testing scenarios in pure Python using Locust. Use when simulating complex user behavior and distributed traffic generation across worker machines.

## Purpose
Locust avoids clunky XML/GUI configuration by letting developers define user behavior as plain Python code with @task decorators, coordinating worker nodes over ZeroMQ to simulate millions of users.

## When to Use
- When executing locust python distributed load testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Locust, Python) cannot be provisioned.

## Supported Technologies
- Locust
- Python
- Distributed Load Testing
- Performance Engineering

## Example Use Cases
### Realistic User Browsing Behavior Simulation
Simulating users searching products, adding items to carts, and viewing reviews with random think times.

### Microservice Internal gRPC Load Testing
Generating 50,000 gRPC RPC calls per second across internal service-to-service networks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Locust) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.locust.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
