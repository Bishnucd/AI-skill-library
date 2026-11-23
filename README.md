# 🧠 AI Skill Library

[![Verified Skills](https://img.shields.io/badge/Verified%20Skills-780-blue.svg)](SKILLS_INDEX.md)
[![Categories](https://img.shields.io/badge/Categories-20-brightgreen.svg)](CATEGORY_INDEX.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Validation](https://img.shields.io/badge/Validation-100%25%20Passing-success.svg)](scripts/validate.mjs)

> **The Universal Standard Library for AI Coding Agents, Desktop Apps, and Mobile Applications.**  
> A community-driven, open-source collection of **780 authentic, tested skills across 20 domains** — free of synthetic filler, validated offline, and ready to plug into any agent ecosystem.

---

## 🚀 What is AI Skill Library?

**AI Skill Library** is an open-source, universal catalog of modular, battle-tested instruction sets that give AI agents concrete capabilities.

Whether you are building with **Antigravity CLI**, **Claude Code**, **Cursor**, **GitHub Copilot**, **Gemini CLI**, or embedding autonomous agents inside **desktop** (Electron, Tauri) or **mobile** (iOS, Android, Flutter) applications, this repository provides the definitive reference skills you need.

- **Universal & Vendor-Agnostic:** Not restricted to any single platform; works across all major LLMs and agent harnesses.
- **100% Authentic:** 780 skills derived directly from official documentation, RFC specifications, and real-world developer workflows. Zero synthetic boilerplate.
- **Deterministically Validated:** Enforced by offline CI validation (`node scripts/validate.mjs`) for strict YAML frontmatter, valid links, and clean directory structure.
- **Community-Powered:** An open public commons where developers worldwide can discover, share, fork, and add new agent capabilities.

---

## 📥 How to Download & Install

### Option 1: Clone the Complete Library
```bash
git clone https://github.com/Bishnucd/AI-skill-library.git
cd AI-skill-library
```

### Option 2: Download a Specific Skill
Every skill is self-contained. You can grab any single skill folder directly:
```bash
# Example: Download the playwright-e2e-suite-generator skill
curl -O https://raw.githubusercontent.com/Bishnucd/AI-skill-library/main/skills/qa-testing/e2e-testing/playwright-e2e-suite-generator/SKILL.md
```

---

## 🔌 How to Add Skills to Your AI Agents & Apps

Each skill contains:
- `SKILL.md`: Structured instructions with standardized YAML frontmatter for machine/agent parsing.
- `README.md`: Human-readable guide with use cases, inputs, outputs, and verified upstream sources.

### 1. Antigravity & Gemini CLI
Add individual skill directories into your workspace or global skills directory:
```bash
# Global skills directory
cp -r skills/agent-technologies/evaluation/ragas-rag-triad-evaluation ~/.gemini/antigravity/skills/

# Or symlink within your active project workspace
ln -s /path/to/AI-skill-library/skills/cloud-devops/ci-cd/github-actions-ci-cd-matrix .gemini/skills/
```

### 2. Claude Code
Reference skills in your project's `CLAUDE.md` or copy the skill directory into your project's `.claude/skills/`:
```bash
mkdir -p .claude/skills
cp -r skills/software-engineering/code-review/pull-request-diff-review-checklist .claude/skills/
```

### 3. Cursor
Add skill instructions into `.cursor/rules/` as rule markdown files or inject them into `.cursorrules`:
```bash
cp skills/database-technologies/migrations/zero-downtime-postgres-migration/SKILL.md .cursor/rules/postgres-migration.mdc
```

### 4. GitHub Copilot & Copilot Workspace
Include relevant skills in your repository's `.github/copilot-instructions.md` or reference them inside prompt templates:
```bash
cat skills/qa-testing/e2e-testing/playwright-e2e-suite-generator/SKILL.md >> .github/copilot-instructions.md
```

### 5. Desktop & Mobile Apps (Custom Agent Harnesses)
If you are developing a native app (Electron, Tauri, React Native, Flutter, Swift, Kotlin):
1. **Bundle as Local Assets:** Store the target `SKILL.md` files in your app's `assets/skills/` directory.
2. **Context Injection:** When initiating your agent's LLM session, read `SKILL.md` and append it into the system prompt or agent persona context.
3. **Tool/Function Schema:** Map the `inputs` and `outputs` defined in the skill's YAML frontmatter directly to your app's internal functions or MCP tools.

---

## 📚 20 Core Categories (780 Total Skills)

Explore the complete searchable catalog in **[SKILLS_INDEX.md](SKILLS_INDEX.md)** or review domain taxonomy in **[CATEGORY_INDEX.md](CATEGORY_INDEX.md)**:

| # | Category | Skills | Description & Scope |
|---|----------|:------:|---------------------|
| 1 | **[agent-technologies](skills/agent-technologies/)** | 40 | Agent evaluation harnesses, skill authoring, memory, orchestration |
| 2 | **[api-development](skills/api-development/)** | 20 | OpenAPI contracts, REST, GraphQL, gRPC specifications, gateways |
| 3 | **[app-development](skills/app-development/)** | 40 | Native desktop (macOS, Windows, Linux) and mobile (iOS, Android, Flutter) |
| 4 | **[automation-workflows](skills/automation-workflows/)** | 40 | Headless browser automation, batch processing, document pipelines |
| 5 | **[business-productivity](skills/business-productivity/)** | 40 | SOP engineering, RFP proposals, operational execution workflows |
| 6 | **[cloud-devops](skills/cloud-devops/)** | 20 | GitHub Actions CI/CD matrix, Kubernetes, Docker, IaC, observability |
| 7 | **[communication-integrations](skills/communication-integrations/)** | 40 | Email triage, meeting summaries, webhooks, Slack/Discord integrations |
| 8 | **[cybersecurity](skills/cybersecurity/)** | 40 | Threat modeling (STRIDE), dependency auditing (SBOM), AppSec hardening |
| 9 | **[data-analytics](skills/data-analytics/)** | 80 | CSV profiling, dashboard specs, spatial geocoding, GIS routing |
| 10 | **[data-engineering](skills/data-engineering/)** | 20 | ETL/ELT pipelines, columnar Parquet batch processing, lakehouse workflows |
| 11 | **[database-technologies](skills/database-technologies/)** | 40 | Zero-downtime schema migrations, query performance tuning, indexing |
| 12 | **[ml-ai](skills/ml-ai/)** | 20 | RAG retrieval, hybrid search, model evaluation, fine-tuning recipes |
| 13 | **[multimedia-and-creative](skills/multimedia-and-creative/)** | 120 | Image editing, prompt direction, video postproduction, voice/audio design |
| 14 | **[product-management](skills/product-management/)** | 20 | Product Requirements Documents (PRDs), roadmap scoping, feature trees |
| 15 | **[qa-testing](skills/qa-testing/)** | 20 | Playwright E2E suites, integration test matrices, mock fixtures |
| 16 | **[search-research](skills/search-research/)** | 40 | Multi-source deep research synthesis, source credibility auditing |
| 17 | **[software-engineering](skills/software-engineering/)** | 40 | Pull request diff reviews, test strategy architecture, refactoring |
| 18 | **[technical-writing](skills/technical-writing/)** | 20 | OpenAPI endpoint documentation, developer onboarding guides |
| 19 | **[ui-ux-design](skills/ui-ux-design/)** | 20 | Design token architecture, Figma-to-code pipelines, WCAG accessibility |
| 20 | **[website-development](skills/website-development/)** | 60 | Backend contracts, OAuth 2.0 flows, modern frontend performance audits |

---

## 🤝 Join the Community — Add Your Skills!

We believe the future of AI tooling is open, collaborative, and decentralized. This repository thrives on community contributions. If you have created a skill, optimized a prompt workflow, or codified an engineering standard: **we want your skill in the library!**

### How to Add a New Skill:
1. **Fork** this repository: Click the **Fork** button at the top right of [GitHub](https://github.com/Bishnucd/AI-skill-library).
2. **Create a branch:**
   ```bash
   git checkout -b skill/add-my-new-skill
   ```
3. **Create your skill folder** following our standard 3-level structure:
   ```
   skills/<category>/<subcategory>/<skill-name>/
   ├── README.md     # Human overview, inputs, outputs, official source links
   └── SKILL.md      # Machine-executable instructions with YAML frontmatter
   ```
4. **Validate your skill locally:**
   ```bash
   node scripts/build-index.mjs       # Update the master index
   node scripts/validate.mjs          # Must exit 0 with 0 errors
   ```
5. **Open a Pull Request:** Push your branch and open a PR with a description of what your skill does and its verified upstream sources.

See our complete [CONTRIBUTING.md](CONTRIBUTING.md) guide for YAML frontmatter templates and style standards.

---

## 🛡️ Quality Standards

Every skill in this library strictly adheres to:
- **Zero Synthetic Filler:** No placeholder scripts or generic templates. Every skill represents an authentic, real-world capability.
- **Traceable Upstream Sources:** Every skill attributes its authoritative documentation (W3C, IETF, official vendor docs).
- **MIT Licensing:** Fully open-source and compatible with both commercial and community applications.
- **Offline Validation:** Automated checks verify naming consistency, link integrity, and frontmatter completeness.

---

## 🏷️ Search & Discoverability Tags

`ai-skills` • `agent-skills` • `agentic-ai` • `ai-agents` • `llm-agents` • `claude-code` • `cursor-rules` • `antigravity-skills` • `copilot-instructions` • `gemini-cli` • `mcp-servers` • `autonomous-agents` • `developer-tools` • `prompt-engineering`

---

## 📄 License

This repository is distributed under the [MIT License](LICENSE). Contributions submitted via Pull Request are also licensed under MIT.
