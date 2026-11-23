# Developer Onboarding Walkthrough Authoring

## Description
Designs end-to-end sandbox walkthroughs that guide external developers from API key creation to production launch. Use when structuring enterprise developer portal onboarding journeys.

## Purpose
Enterprise developers need a structured progression: create sandbox account -> generate test keys -> execute simulated transactions -> request production credentials -> launch.

## When to Use
- When executing developer onboarding walkthrough authoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Developer Onboarding, Sandbox Walkthrough) cannot be provisioned.

## Supported Technologies
- Developer Onboarding
- Sandbox Walkthrough
- DX Design
- Enterprise Portals

## Example Use Cases
### Healthcare API HIPAA Sandbox Onboarding
Guiding healthtech startups through testing simulated patient records before granting production access.

### Banking Core Integration Developer Journey
Walking fintech engineers through KYC verification, account creation, and ACH transfer simulation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Developer Onboarding) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Developer_experience
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
