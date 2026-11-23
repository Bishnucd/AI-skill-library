# Press Release Wire Origin Verification

## Description
Traces syndicated corporate press releases to authoritative distribution wires (PR Newswire, Business Wire). Use when verifying whether market-moving corporate announcements are authentic.

## Purpose
Hoax press releases uploaded to free blogging sites can temporarily swing stock prices. Verifying release distribution on accredited commercial newswires ensures corporate authenticity.

## When to Use
- When executing press release wire origin verification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Press Release Verification, Wire Services) cannot be provisioned.

## Supported Technologies
- Press Release Verification
- Wire Services
- PR Newswire / Business Wire
- Market Truth

## Example Use Cases
### Stock Trading Desk Corporate Action Verification
Preventing automated trading algorithms from executing trades on fake merger announcement hoaxes.

### Major Executive Departure Fact-Check
Confirming that a rumored CEO resignation was officially disseminated via official regulatory press wires.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Press Release Verification) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.businesswire.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
