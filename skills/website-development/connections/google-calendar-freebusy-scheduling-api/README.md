# Google Calendar Freebusy Scheduling Api

## Description
Queries Google Calendar API freeBusy intervals to schedule conflict-free client appointments. Use when building automated meeting booking and calendar scheduling workflows.

## Purpose
Double-booking clients damages professional reputation. The Google Calendar freeBusy API queries busy intervals across multiple calendar accounts, revealing available scheduling slots.

## When to Use
- When executing google calendar freebusy scheduling api in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google Calendar API, freeBusy Query) cannot be provisioned.

## Supported Technologies
- Google Calendar API
- freeBusy Query
- OAuth2
- Scheduling Automation

## Example Use Cases
### Automated Meeting Booking Platform
Allowing sales prospects to pick available 30-minute demo meeting slots directly from an account executive calendar.

### Doctor Clinic Appointment Scheduler
Finding open schedule slots across 5 specialized physicians in a medical clinic.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google Calendar API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/calendar/api/v3/reference/freebusy/query
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
