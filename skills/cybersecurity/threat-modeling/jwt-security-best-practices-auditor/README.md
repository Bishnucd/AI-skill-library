# Jwt Security Best Practices Auditor

## Description
Audits JSON Web Token (JWT) implementations against common cryptographic flaws (alg: none, weak HMAC secrets, jku injection). Use when hardening token-based authentication services.

## Purpose
Misconfigured JWT libraries allow attackers to bypass authentication by altering algorithms to "none" or injecting external public keys via jku headers. Strict verification prevents token forgery.

## When to Use
- When executing jwt security best practices auditor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 8725 JWT Best Practices, Cryptography) cannot be provisioned.

## Supported Technologies
- RFC 8725 JWT Best Practices
- Cryptography
- JWT
- Python / Node.js

## Example Use Cases
### Authentication Service Hardening
Eliminating critical token forgery vulnerabilities in microservice authentication gateways.

### OAuth Token Verification Gate
Validating inbound third-party identity tokens before establishing internal user sessions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 8725 JWT Best Practices) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc8725
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
