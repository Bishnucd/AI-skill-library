# Twilio Verify Sms Two Factor Auth

## Description
Implements SMS-based two-factor authentication and phone verification using the Twilio Verify API. Use when securing user accounts and verifying genuine telephone numbers.

## Purpose
Managing one-time passcodes (OTP), token generation, rate limits, and carrier deliverability manually is difficult. Twilio Verify handles OTP lifecycle, retries, and validation through a single API.

## When to Use
- When executing twilio verify sms two factor auth in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Twilio Verify API, SMS 2FA) cannot be provisioned.

## Supported Technologies
- Twilio Verify API
- SMS 2FA
- Phone Verification
- Authentication

## Example Use Cases
### User Registration Phone Verification
Verifying real mobile numbers during user signup to combat bot spam and multi-account abuse.

### High-Value Banking Transaction Step-Up Auth
Prompting users for an SMS OTP before executing wire transfers over $1,000.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Twilio Verify API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.twilio.com/docs/verify/api
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
