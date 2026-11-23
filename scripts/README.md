# scripts/

Maintenance tooling for Community List. All scripts are dependency-free Node.js
(ESM) and run offline. Nothing here downloads or executes third-party code.

Requires Node.js 18 or newer.

| Script | Purpose |
|--------|---------|
| `validate.mjs` | Structural audit of the whole tree (the executable form of `CHECK.md`) |
| `build-index.mjs` | Regenerates the skill table inside `SKILLS_INDEX.md` from frontmatter |
| `new-skill.mjs` | Scaffolds a compliant skill folder |

## Common commands

```bash
# Audit everything (exit 1 on errors)
node scripts/validate.mjs

# Regenerate the index after adding or editing a skill
node scripts/build-index.mjs

# Fail if the committed index is stale (used by CI)
node scripts/build-index.mjs --check

# Scaffold a new skill
node scripts/new-skill.mjs search-research verification my-new-skill
```

## What `validate.mjs` checks

- Every control file from `CHECK.md` exists and is non-trivial
- Exactly the 15 documented categories exist, all kebab-case
- Three-level depth: `skills/<category>/<subcategory>/<skill>/`
- No stray files at category or subcategory level; no empty subcategories
- `README.md` and `SKILL.md` exist and are substantive
- Frontmatter parses, `name` matches the folder, kebab-case, ≤64 chars
- `description` is 40–1024 chars, has no XML angle brackets, mentions when to use
- `license` is present; unknown frontmatter keys are reported
- `SKILL.md` is under 500 lines
- No two skills share an identical body (duplicate-content detection)
- No two skill folders share a name
- Every relative Markdown link resolves on disk
- `SKILLS_INDEX.md` contains an entry for every skill on disk

## What it deliberately does not do

- It does not fetch URLs. Link rot for external links is a manual review item.
- It does not execute skill scripts. Running unreviewed code is prohibited by
  `RULES.md`.
- It does not check licence compatibility. That requires a human decision and is
  recorded in `RESEARCH_SOURCES.md`.

## Adding a check

1. Append the new rule to `CHECK.md` (append-only).
2. Implement it in `validate.mjs`.
3. Add a line to the table above.
4. Record the operation in `RUNNING.md`.
