# CATEGORY_INDEX.md – Category Architecture

This file defines the 20 core categories and subcategories of Community List.

The taxonomy below represents the consolidated, non-overlapping standard library for AI agents. Categories describe **the work the skill performs**, not the tool it uses.

**Last reviewed:** 2026-11-23

---

## Skill Standards & Quality Thresholds

- **Quality over Quantity:** Every skill must be distinct, specific, actionable, and non-generic.
- **Realistic Targets:** Minimum 20 to maximum 100 authentic, production-grade skills per active subfolder.
- **Rarity Protection:** Single-solution skills solving unique domain problems receive maximum rarity priority and cannot be removed.
- **Best-of-Breed Curation:** When multiple candidate skills overlap, benchmark and keep only the superior implementation.
- **Zero Dummy Clones:** Synthetic boilerplate templates or numbered variants are strictly forbidden.
- **Source Verification:** Every skill must cite authentic upstream sources and documentation.

---

## Placement Rules

1. Place a skill by its **primary output**, not its input.
2. One skill, one home. Cross-cutting behaviour is expressed inside `SKILL.md`, not by duplicating folders.
3. A subcategory must contain at least one real skill. Empty subcategories are not created as directories; unpopulated targets are marked *(planned)* below.
4. Maximum depth is three levels under `skills/` (`skills/<category>/<subcategory>/<skill-name>`).

## Reading This Index

- A subcategory in `code` with no marker has at least one active, validated skill.
- A subcategory marked *(planned)* is a documented target with no skills yet. No empty directory exists for it.

---

## Level 1 – Major Categories (20)

| # | Category | Scope | Populated Subcategories |
|---|----------|-------|-------------------------|
| 1 | [agent-technologies](#1-agent-technologies) | Agent architecture: evaluation, authoring, orchestration, memory | `evaluation`, `skill-authoring` |
| 2 | [api-development](#2-api-development) | API design, REST, GraphQL, gRPC, security, and gateways | `api-design` |
| 3 | [app-development](#3-app-development) | Installable desktop and mobile applications, packaging, stores | `desktop`, `mobile` |
| 4 | [automation-workflows](#4-automation-workflows) | Browser automation, document pipelines, scheduled jobs | `browser`, `documents` |
| 5 | [business-productivity](#5-business-productivity) | Enterprise operations, SOP writing, proposals, and workflows | `operations`, `proposals` |
| 6 | [cloud-devops](#6-cloud-devops) | Cloud infrastructure, CI/CD, containers, IaC, observability | `ci-cd` |
| 7 | [communication-integrations](#7-communication-integrations) | Email, meetings, chat platforms, webhooks, notifications | `email`, `meetings` |
| 8 | [cybersecurity](#8-cybersecurity) | Threat modeling, dependency audits, appsec, incident response | `dependencies`, `threat-modeling` |
| 9 | [data-analytics](#9-data-analytics) | Profiling, dashboards, statistical analysis, spatial analytics | `analysis`, `visualization`, `geocoding`, `routing` |
| 10 | [data-engineering](#10-data-engineering) | ETL pipelines, stream processing, warehousing, data lakes | `etl-pipelines` |
| 11 | [database-technologies](#11-database-technologies) | Migrations, query tuning, relational and NoSQL storage | `migrations`, `performance` |
| 12 | [ml-ai](#12-ml-ai) | Model evaluation, fine-tuning, RAG pipelines, MLOps | `rag-systems` |
| 13 | [multimedia-and-creative](#13-multimedia-and-creative) | Image, video, and audio generation, editing, postproduction | `image-editing`, `image-generation`, `video-postproduction`, `video-preproduction`, `audio-postproduction`, `audio-voice` |
| 14 | [product-management](#14-product-management) | PRDs, user stories, agile roadmaps, feature metrics | `product-strategy` |
| 15 | [qa-testing](#15-qa-testing) | E2E, integration, contract, unit, and performance testing | `e2e-testing` |
| 16 | [search-research](#16-search-research) | Deep research, source verification, intelligence gathering | `deep-research`, `verification` |
| 17 | [software-engineering](#17-software-engineering) | Code review, test strategy, architecture, refactoring | `code-review`, `testing` |
| 18 | [technical-writing](#18-technical-writing) | API documentation, user guides, tutorials, docs-as-code | `api-documentation` |
| 19 | [ui-ux-design](#19-ui-ux-design) | Design systems, design tokens, interaction design, a11y | `design-systems` |
| 20 | [website-development](#20-website-development) | Web frontend, backend APIs, responsive audits, OAuth | `backend`, `connections`, `frontend` |

---

## 1. agent-technologies

Skills for building and extending the agent layer itself.

- `evaluation` – test sets, graders, and evaluation harnesses
- `skill-authoring` – authoring, packaging, and verifying SKILL.md specs
- `orchestration` *(planned)* – task decomposition, multi-agent coordination
- `memory` *(planned)* – long-term, vector store, and semantic recall
- `guardrails` *(planned)* – input validation, output safety, prompt injection defense

---

## 2. api-development

API design, protocol implementation, security, and developer contracts.

- `api-design` – OpenAPI specs, contract-first design
- `rest-api` *(planned)* – RESTful endpoints, resource modeling, HTTP semantics
- `graphql` *(planned)* – Schema federation, resolvers, queries
- `grpc` *(planned)* – Protocol buffers, streaming services

---

## 3. app-development

Installable software across mobile, desktop, and embedded runtimes.

- `desktop` – packaging, signing, and native installers
- `mobile` – store release readiness and mobile lifecycles
- `cross-platform` *(planned)* – Flutter, React Native, Electron patterns

---

## 4. automation-workflows

Procedures executed reliably via headless browsers and document processing.

- `browser` – Playwright and Puppeteer web automation
- `documents` – automated PDF, text, and data extraction pipelines
- `scheduling` *(planned)* – cron jobs, event-driven task automation

---

## 5. business-productivity

Core business operations, documentation, and proposal scoping.

- `operations` – standard operating procedures (SOPs) and runbooks
- `proposals` – project scoping, estimation, and statement of work
- `crm` *(planned)* – customer relationship tracking and lead workflows

---

## 6. cloud-devops

Cloud hosting, container orchestration, CI/CD, and infrastructure-as-code.

- `ci-cd` – GitHub Actions, deployment pipelines
- `containerization` *(planned)* – Docker, Kubernetes manifests, Helm charts
- `iac` *(planned)* – Terraform, OpenTofu, Pulumi configurations
- `monitoring` *(planned)* – Prometheus, Datadog, Grafana telemetry

---

## 7. communication-integrations

Connecting agents to interpersonal communication channels and webhook events.

- `email` – email parsing, triage, drafting, and templates
- `meetings` – meeting transcription, action item synthesis
- `chatbots` *(planned)* – Slack, Discord, Microsoft Teams bots
- `webhooks` *(planned)* – webhook ingestion and payload transformation

---

## 8. cybersecurity

Proactive defense, vulnerability assessment, and threat modeling.

- `dependencies` – dependency vulnerability triage, CVE scanning
- `threat-modeling` – STRIDE threat modeling and mitigation strategies
- `appsec` *(planned)* – OWASP Top 10 auditing, secure code review
- `incident-response` *(planned)* – incident response playbooks and forensic triage

---

## 9. data-analytics

Turning raw datasets into structured evidence, visualizations, and insights.

- `analysis` – CSV profiling, summary statistics, exploratory data analysis
- `visualization` – dashboard specifications, chart generation
- `geocoding` – address normalization, geographic coordinate mapping
- `routing` – travel route optimization, distance matrices
- `statistical-modeling` *(planned)* – regression analysis, hypothesis testing

---

## 10. data-engineering

Data infrastructure, batch pipelines, stream ingestion, and warehousing.

- `etl-pipelines` – automated extraction, transformation, and loading
- `data-warehousing` *(planned)* – snowflake, BigQuery schema optimization
- `stream-processing` *(planned)* – Kafka, Flink event streams

---

## 11. database-technologies

Database engines, migrations, query performance, and data modeling.

- `migrations` – zero-downtime schema migrations, rollback safeguards
- `performance` – SQL query tuning, index strategy, explain plan analysis
- `nosql` *(planned)* – document, key-value, and graph database schemas

---

## 12. ml-ai

Machine learning model lifecycles, evaluation, fine-tuning, and RAG.

- `rag-systems` – retrieval-augmented generation chunking and embeddings
- `model-evaluation` *(planned)* – benchmark evaluations, hallucination scoring
- `fine-tuning` *(planned)* – LoRA, QLoRA instruction dataset curation

---

## 13. multimedia-and-creative

Generation, editing, and post-production across visual and auditory media.

- `image-editing` – product photo retouching, background removal, color grading
- `image-generation` – diffusion model prompt direction and composition
- `video-postproduction` – caption synchronization, subtitle alignments
- `video-preproduction` – storyboard generation and shot listing
- `audio-postproduction` – podcast cleanup, noise gating, loudness normalization
- `audio-voice` – voiceover script adaptation, prosody optimization

---

## 14. product-management

Bridging customer requirements to technical specifications and roadmaps.

- `product-strategy` – product requirements documents (PRDs)
- `roadmapping` *(planned)* – sprint scoping, release planning
- `metrics` *(planned)* – product analytics, cohort retention tracking

---

## 15. qa-testing

Comprehensive software quality assurance across automated test layers.

- `e2e-testing` – end-to-end integration flows, regression suites
- `unit-testing` *(planned)* – test case generation, boundary condition testing
- `performance-testing` *(planned)* – load testing, stress testing harnesses

---

## 16. search-research

Systematic investigation, factual verification, and intelligence gathering.

- `deep-research` – structured domain research reports, bibliography synthesis
- `verification` – source credibility audits, fact checking
- `competitive-intel` *(planned)* – market analysis, competitor feature matrices

---

## 17. software-engineering

Software architecture, code quality, design patterns, and engineering rigor.

- `code-review` – git diff checklists, PR code quality audits
- `testing` – test strategy design, pyramid balancing
- `architecture` *(planned)* – system architecture diagrams, ADR authoring
- `refactoring` *(planned)* – legacy code modernization, code smell elimination

---

## 18. technical-writing

Developer documentation, technical guides, and instructional content.

- `api-documentation` – endpoint reference authoring, request/response examples
- `user-guides` *(planned)* – end-user onboarding manuals, walk-through tutorials
- `docs-as-code` *(planned)* – static site documentation pipelines (Docusaurus, VitePress)

---

## 19. ui-ux-design

User interface design, design tokens, design systems, and usability.

- `design-systems` – component library specifications, style guides
- `accessibility` *(planned)* – WCAG 2.1 compliance audits, ARIA semantics
- `design-tokens` *(planned)* – design token taxonomy and theme variables

---

## 20. website-development

Web frontend engineering, backend integrations, and web standards.

- `backend` – API-first contract development, endpoint validation
- `connections` – OAuth 2.0 / OIDC integrations and authentication handshakes
- `frontend` – design system extraction, responsive layout auditing
