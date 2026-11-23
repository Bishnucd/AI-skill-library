# Tls Cipher Suite Hsts Hardening Auditor

## Description
Audits web server TLS configurations, cipher suite suites, and HTTP Strict Transport Security (HSTS) headers. Use when achieving A+ ratings on Qualys SSL Labs security tests.

## Purpose
Legacy TLS 1.0/1.1 protocols and weak CBC cipher suites allow eavesdropping and downgrade attacks. Hardening configurations to TLS 1.2/1.3 with HSTS preload headers guarantees encryption.

## When to Use
- When executing tls cipher suite hsts hardening auditor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Mozilla SSL Configuration Generator, HSTS) cannot be provisioned.

## Supported Technologies
- Mozilla SSL Configuration Generator
- HSTS
- TLS 1.3
- testssl.sh

## Example Use Cases
### Qualys SSL Labs A+ Certification
Configuring enterprise web endpoints to earn the highest SSL Labs security rating.

### Man-in-the-Middle Downgrade Defense
Enforcing HSTS preloading in major web browsers so users never connect over plain HTTP.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Mozilla SSL Configuration Generator) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ssl-config.mozilla.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
