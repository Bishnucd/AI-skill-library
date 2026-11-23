# Auth0 Universal Login Sso Saml

## Description
Configures enterprise Single Sign-On (SSO) with Auth0 Universal Login, SAML 2.0, and OIDC federations. Use when allowing enterprise clients to sign in using Okta, Azure AD, or Ping.

## Purpose
Enterprise B2B clients require signing in via their corporate identity provider. Auth0 Universal Login federates enterprise SAML and WS-Federation connections with zero custom SAML XML parsing.

## When to Use
- When executing auth0 universal login sso saml in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Auth0, Enterprise SSO) cannot be provisioned.

## Supported Technologies
- Auth0
- Enterprise SSO
- SAML 2.0 / OIDC
- Identity Federation

## Example Use Cases
### Fortune 500 Enterprise Customer SSO Onboarding
Connecting a corporate client Okta instance to your SaaS platform via SAML in 15 minutes.

### Automated Just-In-Time (JIT) User Provisioning
Creating internal employee accounts automatically on their first successful SSO corporate login.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Auth0) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://auth0.com/docs/authenticate/single-sign-on
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
