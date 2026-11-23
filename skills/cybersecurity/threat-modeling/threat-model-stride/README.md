# threat-model-stride

## What it does

Produces a STRIDE threat model: named assets, a data-flow sketch with trust boundaries, threats
enumerated per boundary-crossing element, realistic likelihood and impact ranking, testable
mitigations with verification methods, and a written record of accepted risks.

## Why it exists

Security reviews often produce a generic checklist ("validate input, use HTTPS") that does not
map to the system. A threat model tied to specific elements and boundaries finds the issues that
actually exist — a predictable object key, an SVG upload that becomes stored XSS, an unbounded
decompression — and gives each one a test that proves the fix.

## When to use

- New features handling auth, money, personal data, or uploads.
- Architecture review before build.
- Pre-incident preparation and customer security questionnaires.
- Post-incident, to find related weaknesses.

## When not to use

- Penetration testing, which is exploitation rather than design analysis.
- Compliance mapping exercises, which are checklists by nature.
- Systems with no defined boundary or data flow yet.

## Requirements

- A description or diagram of the architecture.
- The data types stored and where they live.
- Knowledge of who can access what (roles, tenancy model).

## How to use

1. Provide the architecture and the data it handles.
2. The agent sketches flows and marks trust boundaries.
3. It enumerates STRIDE threats per element and ranks them.
4. It writes a testable mitigation and verification step for each.
5. It records accepted risks with owners and review dates.

## Example

```
Use threat-model-stride on the invoice upload feature.
```

Result: 14 ranked threats, the top three being stored XSS via SVG, cross-tenant object access
through a predictable key, and unbounded decompression, each with a test.

## Limitations

- Design-level analysis; it does not prove exploitability.
- Quality depends on the accuracy of the architecture description.
- Does not cover supply-chain or physical threats unless scoped in.
- Cannot verify that a mitigation was implemented; it defines the test.

## Source and attribution

Originally authored for Community List. STRIDE is a threat-modelling mnemonic originated by
Microsoft; the mnemonic is used, no Microsoft text is reproduced. No third-party skill content is
included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
