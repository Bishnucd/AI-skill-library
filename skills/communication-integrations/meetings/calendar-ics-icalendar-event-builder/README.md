# Calendar Ics Icalendar Event Builder

## Description
Generates standardized iCalendar (.ics) event files with RRULE recurring schedules and alarms per RFC 5545. Use when generating downloadable calendar invite files for emails and websites.

## Purpose
Emailing calendar invites requires formatting valid RFC 5545 VCALENDAR objects with UTC timestamps, unique UID hashes, recurrence rules (RRULE), and VALARM reminder blocks.

## When to Use
- When executing calendar ics icalendar event builder in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (iCalendar (RFC 5545), ical-generator / icalendar) cannot be provisioned.

## Supported Technologies
- iCalendar (RFC 5545)
- ical-generator / icalendar
- Python / Node.js
- MIME

## Example Use Cases
### Webinar Registration Invites
Attaching calendar invites to confirmation emails that auto-add to Outlook and Apple Calendar.

### Recurring Standup Scheduling
Generating calendar subscriptions for recurring team meeting cadences.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (iCalendar (RFC 5545)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc5545
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
