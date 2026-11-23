# Fastapi Async Dependency Injection

## Description
Structures scalable Python asynchronous backend services using FastAPI dependency injection (Depends). Use when designing maintainable, decoupled Python API backends.

## Purpose
FastAPI dependency injection enables clean decoupling of database sessions, authentication context, and third-party clients, allowing effortless unit testing and mock substitution.

## When to Use
- When executing fastapi async dependency injection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FastAPI, Python 3.10+) cannot be provisioned.

## Supported Technologies
- FastAPI
- Python 3.10+
- Pydantic
- asyncio

## Example Use Cases
### Enterprise Python Microservices
Building high-throughput asynchronous REST APIs with type-safe dependency graphs.

### Decoupled Database Sessions
Managing PostgreSQL asyncpg connection lifecycles automatically across API requests.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FastAPI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://fastapi.tiangolo.com/tutorial/dependencies/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
