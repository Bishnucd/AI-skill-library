# Api Backward Compatibility Breaking Change Check

## Description
Detects breaking changes in REST/GraphQL/gRPC APIs using oasdiff and buf breaking. Use when protecting public API contracts and mobile clients from unexpected breaks.

## Purpose
Renaming an API field or changing a parameter type breaks mobile apps and external integrations. Automated schema diffing compares current PR specs against the main branch to block breaking changes.

## When to Use
- When executing api backward compatibility breaking change check in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (oasdiff, buf breaking) cannot be provisioned.

## Supported Technologies
- oasdiff
- buf breaking
- API Compatibility
- Contract Testing

## Example Use Cases
### Mobile Client API Protection Gate
Preventing backend developers from deleting JSON fields still consumed by older mobile app versions in the wild.

### gRPC Protocol Buffer Field Tag Verification
Enforcing that Protobuf field numbers are never reused or deleted without reserved tags.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (oasdiff) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/Tufin/oasdiff
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
