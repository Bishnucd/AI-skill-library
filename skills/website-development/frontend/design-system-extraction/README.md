# design-system-extraction

## What it does

Samples the computed styles of a live page (or reads a set of screenshots), clusters the
raw values, and emits a three-layer token system: primitives, semantics, and component
aliases. Ships as CSS custom properties plus a Tailwind theme, with a token table that
records where each value came from.

## Why it exists

Most "match this design" requests fail in the same way: the agent eyeballs a screenshot,
invents a colour palette, and produces something that is close but visibly wrong. Counting
actual computed values turns a guess into a measurement, and naming tokens by role makes
the result maintainable instead of a pile of hex codes.

## When to use

- Rebuilding an existing product's UI from a URL or screenshots.
- Consolidating hard-coded styles in a codebase into a token layer.
- Porting a design into Tailwind or a component library.

## When not to use

- Creating a brand-new visual identity — that is design, not extraction.
- A single screenshot with no interactive states — you will only get low-confidence values.
- Sites you are not permitted to inspect.

## Requirements

- A reachable page, a local build, or at least three screenshots covering key states.
- A target styling system.
- Ability to run a snippet in the browser console, or a saved DOM snapshot.

## How to use

1. Ask the agent to run the skill with the reference URL and target stack.
2. It samples values and shows the frequency table before naming anything.
3. It proposes merges for near-duplicate values; approve or reject them.
4. It writes `tokens.css`, the Tailwind theme, and `TOKENS.md`.
5. It applies the tokens to one reference component and reports visual differences.

## Example

```
Use design-system-extraction on https://example.com, target Tailwind v4.
```

Result: 6 primitives, 14 semantic tokens, a note that two grays were merged, and a warning
that the primary button text fails WCAG AA at 3.1:1.

## Limitations

- Cannot infer hover, focus, disabled, or dark-mode values from a static image.
- Does not extract layout grids or component structure — only style values.
- Fonts are recorded by metrics and family name; licensing is the user's decision.
- Very large design systems produce a long token list; the skill will cap output at the
  most-used 40 tokens and list the remainder as ungrouped.

## Source and attribution

Originally authored for Community List. The sampling approach is a standard browser
`getComputedStyle` technique; no third-party skill content is included. Format follows the
Agent Skills specification (https://github.com/agentskills/agentskills).

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
