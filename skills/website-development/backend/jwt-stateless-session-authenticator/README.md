# Jwt Stateless Session Authenticator

## Description
Implements stateless JWT token authentication with short-lived access tokens and sliding refresh tokens. Use when securing stateless web API backends and SPAs.

## Purpose
Stateless JWT auth scales horizontally across microservices. Pairing 15-minute access tokens with HttpOnly refresh tokens stored in Redis enables instant revocation while avoiding database lookups on every call.

## When to Use
- When executing jwt stateless session authenticator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (JWT (JSON Web Tokens), Node.js / Python) cannot be provisioned.

## Supported Technologies
- JWT (JSON Web Tokens)
- Node.js / Python
- Cryptographic HMAC/RSA
- HTTP-Only Cookies

## Example Use Cases
### Stateless API Authorization
Authorizing microservice requests without querying session databases on every HTTP request.

### Secure Single-Page App Auth
Protecting single-page web applications from XSS token theft using HttpOnly cookies.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (JWT (JSON Web Tokens)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://auth0.com/docs/secure/tokens/json-web-tokens
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
