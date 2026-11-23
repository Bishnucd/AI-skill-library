# Rate Limiting Distributed Ddos Shield

## Description
Configures multi-tier Cloudflare WAF and edge rate-limiting rules to mitigate Layer 7 application DDoS attacks. Use when protecting public web services from traffic floods and credential stuffing.

## Purpose
Layer 7 application floods exhaust server CPU by targeting computationally expensive endpoints (search, login). Cloudflare edge rules track request frequency per IP/session, challenging abusive traffic.

## When to Use
- When executing rate limiting distributed ddos shield in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Cloudflare WAF, Edge Rate Limiting) cannot be provisioned.

## Supported Technologies
- Cloudflare WAF
- Edge Rate Limiting
- HTTP/2
- Bot Management

## Example Use Cases
### Credential Stuffing Defense
Blocking automated botnets attempting thousands of login attempts per minute.

### Search Endpoint DDoS Mitigation
Throttling malicious scrapers attempting to overwhelm database full-text search engines.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Cloudflare WAF) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.cloudflare.com/waf/rate-limiting-rules/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
