# RESEARCH_SOURCES.md – Source Register

Every source used for discovery, taxonomy, or format decisions is recorded here.

**Verification levels**

- `DIRECT` – page or file was fetched and read during this project.
- `SEARCH` – content was read through a search result summary; the underlying page was not fetched.
- `REPORTED` – a fact (star count, licence, date) is repeated from a third party and has not been independently confirmed.

Do not treat `SEARCH` or `REPORTED` rows as licence clearance. Any actual import of content
requires a `DIRECT` check of the licence file at the source.

---

## Source register

### S1 – anthropics/skills
| Field | Value |
|-------|-------|
| URL | https://github.com/anthropics/skills |
| Type | Official vendor repository (reference implementations) |
| Licence | Apache-2.0 for most skills; `docx`/`pdf`/`pptx`/`xlsx` reported as source-available (REPORTED) |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (SEARCH) |
| Used for | `SKILL.md` structure, frontmatter fields, progressive-disclosure model, category inspiration |
| Imported content | None. No file from this repository is copied into Community List. |

### S2 – Agent Skills specification
| Field | Value |
|-------|-------|
| URL | https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx |
| Type | Open standard specification |
| Licence | Not stated on the fetched page – verify before redistributing spec text |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (DIRECT) |
| Used for | `name`/`description`/`license`/`compatibility`/`metadata`/`allowed-tools` rules, directory conventions, validation expectations |
| Imported content | Field constraints are restated in our own words in `RULES.md` and `scripts/validate.py`. |

### S3 – Anthropic: "Equipping agents for the real world with Agent Skills"
| Field | Value |
|-------|-------|
| URL | https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills |
| Type | Engineering article (published 2025-10-16) |
| Licence | Article; not redistributable |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (SEARCH) |
| Used for | Progressive disclosure rationale (metadata → body → resources) |
| Imported content | None. |

### S4 – VoltAgent/awesome-agent-skills
| Field | Value |
|-------|-------|
| URL | https://github.com/VoltAgent/awesome-agent-skills |
| Type | Curated community index (~1,000+ skills) |
| Licence | MIT (REPORTED) |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (SEARCH) |
| Used for | Ecosystem breadth, evidence that skills exist across dev/creative/enterprise work |
| Imported content | None. |

### S5 – ComposioHQ/awesome-claude-skills
| Field | Value |
|-------|-------|
| URL | https://github.com/ComposioHQ/awesome-claude-skills |
| Type | Curated community index |
| Licence | Apache-2.0 (REPORTED) |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (SEARCH) |
| Used for | Ten-category taxonomy reference (document processing, development, data, business, communication, creative, productivity, collaboration, security, assistive tech) |
| Imported content | None. |

### S6 – github/awesome-copilot
| Field | Value |
|-------|-------|
| URL | https://github.com/github/awesome-copilot |
| Type | Vendor-maintained community index |
| Licence | Not verified |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (REPORTED via comparison article) |
| Used for | Confirming cross-agent portability of the skill format |
| Imported content | None. |

### S7 – Open Agentic Schema Framework (OASF) skill categories
| Field | Value |
|-------|-------|
| URL | https://schema.oasf.outshift.com/skill_categories |
| Type | Open taxonomy schema |
| Licence | Not verified |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (SEARCH) |
| Used for | Subcategory naming discipline (e.g. Frontend Development, Styling and Responsive Layout, Web Animation, Document Parsing, Office Productivity) |
| Imported content | None. Taxonomy inspired, not copied. |

### S8 – Marketplace taxonomies (signal only)
| Field | Value |
|-------|-------|
| URLs | https://skillsdirectory.co/c , https://agentskills.so/skills/categories , https://skillspace.sh/categories , https://aiindigo.com/skills |
| Type | Commercial directories |
| Licence | Not applicable |
| Discovery | 2026-11-22 |
| Last verified | 2026-11-22 (SEARCH) |
| Used for | Demand signal: which capability clusters are large (frontend, app security, data analysis, automation, research) |
| Imported content | None. These are commercial listings and are not authoritative for licensing or quality. |

---

## Decisions taken from research

| Decision | Evidence |
|----------|----------|
| Use `SKILL.md` + YAML frontmatter as the unit of a skill | S1, S2 |
| Keep `SKILL.md` under ~500 lines and push detail to `references/` | S2 |
| Require a human-facing `README.md` per skill even though upstream discourages it | Project requirement (master prompt §8); recorded as an explicit deviation in `RULES.md` |
| Fifteen major categories, three levels deep | S4, S5, S7, S8 clustering |
| Separate `agent-technologies` from `software-engineering` | Agent-building work (skills, evals, orchestration) is distinct from application code work |
| Keep `maps-and-location` as its own category | Distinct data model, tooling, and failure modes (match confidence, routing constraints) |

---

## Sources deliberately not used

| Source | Reason |
|--------|--------|
| Bulk-generated "3,000+ skills" aggregators | No per-skill provenance; quality unverifiable |
| Skills behind a vendor account or API key | Cannot verify content or licence |
| Content with no licence file | Cannot establish redistribution rights |
| Paywalled or scraped skill dumps | Licensing uncertainty |

---

## Re-verification schedule

| Cadence | Action |
|---------|--------|
| Each maintenance session | Re-check S1 and S2 for format changes |
| Monthly | Re-check S4/S5 activity and dead links |
| Before any import | `DIRECT` licence check at the exact source URL |

---

## Enhanced Source Documentation Requirements (from RULES.md Amendment A8)

Every skill's `README.md` must contain a *Sources and Licensing* section recording, where applicable:

| Field | Description |
|-------|-------------|
| Original source name and direct URL | Exact page/repo/file URL |
| Author or organisation | Person or entity who created the source |
| Source type and repository | e.g., GitHub repo, official docs, community resource |
| Original version or commit | Git tag, commit hash, release version |
| Discovery and last-verification dates | ISO 8601 dates |
| Licence name and SPDX identifier | e.g., MIT, Apache-2.0, BSD-3-Clause |
| Link to licence terms | Direct URL to LICENSE file |
| Adaptation and redistribution permissions | Whether the licence permits modification and redistribution |
| Attribution requirements and modifications | What the licence requires for attribution |
| Independently authored or adapted | Clear statement of origin |

**Verification rule:** The original source and licence MUST be verified directly (`DIRECT` level) before importing or adapting content. Search summaries (`SEARCH`) and unverified claims (`REPORTED`) are NOT sufficient for licence clearance.

---

*Append new sources; never delete an entry. Mark a source `DEPRECATED` in a new row if it
stops being maintained.*
