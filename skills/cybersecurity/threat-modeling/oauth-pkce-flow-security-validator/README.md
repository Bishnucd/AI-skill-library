# Oauth Pkce Flow Security Validator

## Description
Validates OAuth 2.1 authorization code flow with Proof Key for Code Exchange (PKCE) for client applications. Use when securing single-page and mobile apps against authorization code interception.

## Purpose
Mobile and single-page apps cannot securely store client secrets. OAuth 2.1 mandates PKCE (code_verifier and code_challenge) to prevent authorization code theft.

## When to Use
- When executing oauth pkce flow security validator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OAuth 2.1, PKCE) cannot be provisioned.

## Supported Technologies
- OAuth 2.1
- PKCE
- SHA-256
- Crypto

## Example Use Cases
### Mobile App Authentication
Securing native iOS and Android login flows against malicious custom URI interception.

### SPA Security Architecture
Implementing modern auth for React/Vue apps without exposing client secrets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OAuth 2.1) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc7636
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
