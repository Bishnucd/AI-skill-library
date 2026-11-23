# api-contract-first

## What it does

Produces a complete OpenAPI 3.1 contract — resources, error envelope, pagination,
idempotency, auth, rate limits — before implementation starts, then derives TypeScript
types, a typed client, and contract tests from that single source.

## Why it exists

Most client/server mismatches come from an unwritten interface: the server returns
`{ items: [...] }`, the client reads `{ data: [...] }`, and the bug appears at runtime.
Writing the contract first makes the interface reviewable while it is still cheap to
change, and makes drift detectable by tests.

## When to use

- Adding or changing a public or internal HTTP API.
- Splitting work between a client and a server author.
- Generating a typed client or SDK.
- Auditing an existing API that has no specification.

## When not to use

- Internal function signatures or module boundaries.
- GraphQL schemas (the same discipline applies, but the artefacts differ).
- A throwaway prototype that will not be consumed by anything else.

## Requirements

- Node.js for the generators, or any OpenAPI toolchain the project already uses.
- A decision on naming conventions, or permission to apply the defaults in the skill.
- Access to the existing API, if one exists, to derive or verify.

## How to use

1. Ask for the contract on a named resource.
2. The agent writes the conventions block and asks you to confirm or override it.
3. It writes `openapi.yaml`, lints it, and shows the error envelope and pagination shape.
4. It generates types and contract tests.
5. It reports open questions rather than guessing at missing domain rules.

## Example

```
Use api-contract-first for a /v1/invoices resource with create, list, get, and void.
```

Result: a linted contract, `Idempotency-Key` on create, `409` on double-void, cursor
pagination, generated types, and four contract tests that fail if the server drifts.

## Limitations

- Generates a contract, not a business domain: rules like "an invoice cannot be voided after
  payment" must come from the user.
- Contract tests assert shape and status, not business correctness.
- Large existing APIs are only partly derivable; the skill will mark inferred parts.
- Assumes HTTP/JSON. Other transports need a different artefact.

## Source and attribution

Originally authored for Community List. References the OpenAPI Specification 3.1
(https://spec.openapis.org/oas/v3.1.0) and IETF RFC 9457 problem-details conventions for the
error shape. No third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
