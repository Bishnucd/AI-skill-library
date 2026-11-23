# Api Gateway Reverse Proxy Caching Nginx

## Description
Configures NGINX reverse proxy micro-caching, gzip/brotli compression, and SSL termination. Use when shielding upstream backend application servers and accelerating API response times.

## Purpose
Passing all requests directly to Node/Python backends wastes CPU. NGINX micro-caching caches identical GET API responses for 1–5 seconds, absorbing massive viral traffic spikes with near-zero latency.

## When to Use
- When executing api gateway reverse proxy caching nginx in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (NGINX, Reverse Proxy) cannot be provisioned.

## Supported Technologies
- NGINX
- Reverse Proxy
- Micro-Caching
- Performance

## Example Use Cases
### Viral News API Traffic Absorption
Absorbing 50,000 requests/sec on breaking news endpoints while upstream Python API handles only 1 req/sec.

### Microservice SSL Termination & Routing
Terminating HTTPS certificates at NGINX edge and proxying plain HTTP traffic to internal Docker services.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (NGINX) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
