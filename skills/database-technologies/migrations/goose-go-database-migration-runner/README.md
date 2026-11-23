# Goose Go Database Migration Runner

## Description
Executes lightweight, binary-embedded SQL and Go database migrations using Pressly Goose. Use when managing database versions in Go microservices without heavy runtimes.

## Purpose
Goose is a database migration tool that supports plain SQL scripts and Go functions, capable of being compiled directly into Go service binaries using //go:embed.

## When to Use
- When executing goose go database migration runner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Goose, Go (Golang)) cannot be provisioned.

## Supported Technologies
- Goose
- Go (Golang)
- SQL Migrations
- Embedded Binaries

## Example Use Cases
### Single-Binary Go Microservice Deployment
Packaging all schema migrations inside the Go executable for zero-dependency container deployment.

### Data Transformation in Complex Go Migrations
Writing programmatic Go functions to backfill and decrypt sensitive records during migrations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Goose) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/pressly/goose
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
