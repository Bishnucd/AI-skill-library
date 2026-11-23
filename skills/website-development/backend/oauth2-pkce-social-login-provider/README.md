# Oauth2 Pkce Social Login Provider

## Description
Implements OAuth2 Authorization Code Grant with Proof Key for Code Exchange (PKCE) for social login. Use when authenticating users securely via Google, GitHub, and Apple.

## Purpose
Standard authorization code grants are vulnerable to authorization code interception on mobile and single-page apps. PKCE generates cryptographic verifiers and challenges to guarantee origin authenticity.

## When to Use
- When executing oauth2 pkce social login provider in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OAuth2 / PKCE, Social Login) cannot be provisioned.

## Supported Technologies
- OAuth2 / PKCE
- Social Login
- OpenID Connect
- Security

## Example Use Cases
### Secure Google & GitHub Social Login
Allowing web and mobile users to sign in securely with their Google credentials without client secrets.

### Single-Page App Authentication Hardening
Eliminating client secret exposure in frontend browser code using PKCE exchange flows.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OAuth2 / PKCE) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://oauth.net/2/pkce/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
