# Community List

## Current status

- **195 authentic skills** across **20 core categories** (5 skills per active subfolder), each with complete `README.md` and `SKILL.md`
- **Clean 20-category standard library** established with zero synthetic boilerplate or dummy clones
- Structural audit passes with **0 errors and 0 warnings** (`node scripts/validate.mjs`)
- Generated index [SKILLS_INDEX.md](SKILLS_INDEX.md) synchronized and verified (`node scripts/build-index.mjs --check`)
- All content is verified locally; ready for manual GitHub publication by the maintainer
- **Quality standards:** Authentic, domain-specific instructions with verified upstream sources and MIT license compliance
- **Audit discipline:** Mandatory read-only verification before and after structural updates, recorded in [RUNNING.md](RUNNING.md) and [PROJECT_STATE.md](PROJECT_STATE.md)

See [PROJECT_STATE.md](PROJECT_STATE.md) for the verified snapshot and [RUNNING.md](RUNNING.md) for the operation log.

---

## What is Community List?

Community List is an open-source, community-driven directory of AI agent skills — reusable, documented instruction sets that extend AI agents with specific capabilities. Think of it as a "standard library" for AI agents, organized, validated, and maintained by the community.

## Why Does This Exist?

AI agents are powerful but need specific instructions to perform specialized tasks well. Community List centralizes these into a single, organized, high-quality library that anyone can use, contribute to, and maintain locally.

## How the Repository is Organized

### Three-Level Hierarchy
```
skills/
├── [major-category]/
│   ├── [subcategory]/
│   │   ├── [skill-name]/
│   │   │   ├── README.md      # Human documentation
│   │   │   └── SKILL.md       # Agent instructions
│   │   └── [another-skill]/
│   └── [another-subcategory]/
└── [another-major-category]/
```

### Major Categories (20)
Defined in detail with scopes and inclusion criteria in [CATEGORY_INDEX.md](CATEGORY_INDEX.md):

| # | Category | Scope | Populated Subcategories |
|---|----------|-------|-------------------------|
| 1 | **agent-technologies** | Evaluation harnesses, skill authoring, orchestration, memory | `evaluation`, `skill-authoring` |
| 2 | **api-development** | OpenAPI contracts, REST, GraphQL, gRPC, gateways | `api-design` |
| 3 | **app-development** | Desktop, mobile, release readiness, packaging | `desktop`, `mobile` |
| 4 | **automation-workflows** | Headless browser automation, batch document pipelines | `browser`, `documents` |
| 5 | **business-productivity** | Standard operating procedures (SOPs), proposals, workflows | `operations`, `proposals` |
| 6 | **cloud-devops** | CI/CD pipelines, Docker, Kubernetes, IaC, monitoring | `ci-cd` |
| 7 | **communication-integrations** | Email triage, meeting summaries, webhooks, chat | `email`, `meetings` |
| 8 | **cybersecurity** | Threat modeling, dependency vulnerability audits, appsec | `dependencies`, `threat-modeling` |
| 9 | **data-analytics** | CSV profiling, dashboard specs, geocoding, routing | `analysis`, `visualization`, `geocoding`, `routing` |
| 10 | **data-engineering** | ETL pipelines, columnar Parquet batch processing, lakes | `etl-pipelines` |
| 11 | **database-technologies** | Schema migrations, query performance tuning, indexing | `migrations`, `performance` |
| 12 | **ml-ai** | RAG retrieval, hybrid search, model evaluation, fine-tuning | `rag-systems` |
| 13 | **multimedia-and-creative** | Image editing, prompt direction, video, audio postproduction | `image-editing`, `image-generation`, `video-postproduction`, `video-preproduction`, `audio-postproduction`, `audio-voice` |
| 14 | **product-management** | Product Requirements Documents (PRDs), roadmap scoping | `product-strategy` |
| 15 | **qa-testing** | Playwright E2E testing, unit and integration suites | `e2e-testing` |
| 16 | **search-research** | Deep research reports, source credibility auditing | `deep-research`, `verification` |
| 17 | **software-engineering** | PR diff review checklists, test strategy design, architecture | `code-review`, `testing` |
| 18 | **technical-writing** | API endpoint reference documentation, user guides | `api-documentation` |
| 19 | **ui-ux-design** | Design token architecture, design systems, accessibility | `design-systems` |
| 20 | **website-development** | Backend contracts, OAuth 2.0 integrations, frontend audits | `backend`, `connections`, `frontend` |

---

## How to Find Skills

1. **Browse by Category:** Navigate to `skills/[category]/[subcategory]/`
2. **Search the Index:** Check [SKILLS_INDEX.md](SKILLS_INDEX.md) for a searchable list
3. **Check Categories:** See [CATEGORY_INDEX.md](CATEGORY_INDEX.md) for category descriptions

Each skill folder contains:
- **README.md** — Human-readable documentation with use cases, dependencies, and examples
- **SKILL.md** — Machine-readable agent instructions with YAML frontmatter

## How to Maintain the Library

### Validation Scripts

```bash
node scripts/validate.mjs          # structural audit; exit 0 means no errors
node scripts/build-index.mjs       # regenerate the skill table in SKILLS_INDEX.md
node scripts/build-index.mjs --check # verify index is up to date
```

The validator checks for:
- Missing `README.md` / `SKILL.md`
- Invalid or non-standard YAML frontmatter, and `name` matching folder
- Broken relative links
- Index consistency with filesystem
- Category tree alignment with CATEGORY_INDEX.md

Runs offline, has zero dependencies, and never executes skill content.

---

## License

This project structure and documentation: MIT License  
Individual skills: MIT License (documented per skill)
