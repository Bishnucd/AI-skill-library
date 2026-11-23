# Crisis Communication Plan Runbook

## Description
Authors emergency crisis communication protocols, customer status page playbooks, and PR holding statements. Use when managing external stakeholder communications during major outages or breaches.

## Purpose
Silence or conflicting statements during major incidents destroy customer trust. A crisis communication playbook establishes designated spokespersons, approval chains, and pre-drafted status templates.

## When to Use
- When executing crisis communication plan runbook in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Crisis Communications, Statuspage) cannot be provisioned.

## Supported Technologies
- Crisis Communications
- Statuspage
- Markdown Playbooks

## Example Use Cases
### Major Cloud Outage Communication
Keeping 100,000 customers informed during an unplanned multi-hour database failover.

### Security Incident Disclosure
Delivering transparent, legally compliant breach notifications to impacted users.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Crisis Communications) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.ready.gov/crisis-communications-plan
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
