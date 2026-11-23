# Contributing to Community List

Thank you for contributing to Community List! This guide will help you submit high-quality skills that benefit the entire AI agent community.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Skill Submission Process](#skill-submission-process)
- [Quality Standards](#quality-standards)
- [Skill Documentation Requirements](#skill-documentation-requirements)
- [Categorization Guidelines](#categorization-guidelines)
- [License Requirements](#license-requirements)
- [Review Process](#review-process)

---

## Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). In summary:
- Be respectful and inclusive
- Focus on constructive feedback
- No harassment, discrimination, or harmful content
- Respect intellectual property and licensing

---

## Ways to Contribute

### 1. Submit New Skills
Discover a useful AI agent skill from a public source? Submit it!

### 2. Improve Existing Skills
- Enhance documentation
- Fix bugs in instructions
- Add examples
- Update for new versions

### 3. Suggest Categories/Subcategories
If the current hierarchy doesn't fit a skill, propose a new category.

### 4. Report Issues
- Outdated skills
- Broken links
- Missing documentation
- Duplicate skills

### 5. Submit Examples
Real-world usage examples help others understand skills better.

---

## Skill Submission Process

### Step 1: Check for Duplicates
Before submitting, search:
- [SKILLS_INDEX.md](SKILLS_INDEX.md)
- The `skills/` folder structure
- GitHub issues/PRs for similar submissions

### Step 2: Verify Source and License
**Required:** The skill source must have a license permitting:
- Adaptation/modification
- Redistribution
- Commercial use (preferred)

**Preferred licenses:** MIT, Apache 2.0, BSD-3-Clause, BSD-2-Clause, ISC, CC0

**Acceptable with attribution:** CC-BY-4.0, CC-BY-SA-4.0

**Not acceptable without permission:** GPL, AGPL, proprietary, no license

Record license info in the skill's README.md.

### Step 3: Categorize the Skill
1. Check [CATEGORY_INDEX.md](CATEGORY_INDEX.md) for existing categories
2. Choose the most specific major category
3. Choose the most specific subcategory
4. If no fit exists, propose a new subcategory/category in your submission

### Step 4: Create Skill Documentation
Create a folder at: `skills/[major-category]/[subcategory]/[skill-name]/`

**Required files:**
- `README.md` — Human documentation (see template below)
- `SKILL.md` — Agent instructions (see template below)

### Step 5: Validate Locally
```bash
node scripts/build-index.mjs   # regenerate the index
node scripts/validate.mjs      # must exit 0 with no errors
```
The validator checks file presence, frontmatter, naming, duplicate content, relative links, and
index consistency. Fix every error before opening a pull request.

### Step 6: Submit
When the project is on GitHub: Open a Pull Request with:
- Clear title: `Add: [skill-name] to [category]/[subcategory]`
- Description of what the skill does
- Source URL and license
- Any testing you've done

---

## Quality Standards

### Skills MUST Be:
- **Specific** — Address a concrete use case, not generic advice
- **Actionable** — Provide executable instructions an agent can follow
- **Reusable** — Applicable in multiple relevant scenarios
- **Well-documented** — Both README.md and SKILL.md complete
- **Properly attributed** — Source URL, author, license documented
- **Safe** — No malicious instructions, data exfiltration, or harmful actions

### Skills Should NOT Be:
- Generic advice ("be helpful", "think step by step")
- Single-use prompts without generalization
- Copies of copyrighted material without permission
- Duplicates of existing skills
- Empty or placeholder content

---

## Skill Documentation Requirements

### README.md Template
```markdown
# [Skill Name]

## Description
Brief 1-2 sentence description of what this skill does.

## Purpose
What problem does this solve? Why would someone use it?

## When to Use
- Scenario 1
- Scenario 2

## When NOT to Use
- Scenario where this skill is inappropriate
- Better alternatives

## Supported Technologies
- Technology 1 (version if relevant)
- Technology 2

## Dependencies
- Required tools, APIs, libraries
- Account requirements

## Example Use Cases
### Use Case 1
Description of a concrete scenario.

### Use Case 2
Another concrete scenario.

## Usage Instructions
Step-by-step instructions for humans to understand how to invoke/use this skill.

## Limitations
- Known limitations
- Edge cases not handled
- Performance considerations

## Source and Attribution
- **Original Source:** [URL]
- **Author:** [Name/Organization]
- **License:** [License type]
- **Retrieved:** [Date]
- **Version/Commit:** [If applicable]
```

### SKILL.md Template
```markdown
---
name: skill-name
description: What it does in one sentence. Use when the user asks to <trigger phrases>.
license: MIT
metadata:
  author: <your handle or "community-list">
  version: "1.0.0"
  created: "YYYY-MM-DD"
---

# Skill Name

## When to use
- <situation>

## Inputs
| Input | Required | Notes |

## Workflow
1. <concrete step>

## Rules
- <hard constraint>

## Output format
<exact shape of the deliverable>

## Error handling
| Condition | Action |

## Examples
**Input:** <example>
**Output:** <example>
```

### YAML Frontmatter Fields (Required)
| Field | Required | Constraints |
|-------|----------|-------------|
| `name` | Yes | Kebab-case, ≤64 chars, must equal the folder name, no leading/trailing hyphen, no `--` |
| `description` | Yes | 1–1024 chars, states **what it does** and **when to use it**, no XML angle brackets |
| `license` | Yes in this repo | SPDX identifier or a licence file reference |

### YAML Frontmatter Fields (Optional)
| Field | Constraints |
|-------|-------------|
| `compatibility` | ≤500 chars; environment requirements |
| `metadata` | String key-value map (author, version, created, source) |
| `allowed-tools` | Space-separated tool list; experimental |

**Do not invent frontmatter fields.** The validator warns on any key outside the list above.
Put provenance (`source`, `retrieved`) in the README's *Source and attribution* section, and in
`RESEARCH_SOURCES.md`, not in the frontmatter.

Source: [Agent Skills specification](https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx).

---

## Categorization Guidelines

### Major Categories (~15 total)
Broad domains of AI agent capability. See [CATEGORY_INDEX.md](CATEGORY_INDEX.md) for current list.

### Subcategories
Specific capability areas within a major category. Should be:
- Mutually exclusive where possible
- Collectively exhaustive within the category
- Named consistently (lowercase, hyphenated)

### Skill Placement
- Most specific subcategory that fits
- If multiple fit, choose the primary use case
- Document reasoning in PR if ambiguous

---

## License Requirements

### For Submitted Skills
You must verify and document:
1. **Source license** — What license the original skill is under
2. **Compatibility** — Whether it permits adaptation and redistribution
3. **Attribution** — What attribution the license requires

### For This Project
- Project structure/docs/scripts: MIT License (see [LICENSE](LICENSE))
- Original skills authored for this repository: MIT License
- Imported or adapted skills: retain the original license, stated in the `license` field and the
  README's *Source and attribution* section
- Contributions: by submitting, you confirm you have the right to contribute the content under
  the stated license

### License Compatibility Matrix
| Original License | Can Include? | Notes |
|-----------------|--------------|-------|
| MIT, Apache 2.0, BSD, ISC, CC0 | Yes | Preferred |
| CC-BY-4.0 | Yes | Must preserve attribution |
| CC-BY-SA-4.0 | Yes | Derivatives must share alike |
| GPL-3.0 | Only with review | Viral - affects whole project |
| Proprietary/No License | No | Cannot include without permission |

---

## Review Process

### Automated Checks
- File structure validation
- YAML frontmatter syntax
- Required fields present
- No broken internal links
- Index consistency

### Human Review
Maintainers will check:
- Skill quality and specificity
- Documentation completeness
- License compatibility
- Correct categorization
- No duplicates
- Safety (no malicious content)

### Review Timeline
- Initial response: Within 7 days
- Full review: Within 14 days
- Complex submissions: May take longer

### Possible Outcomes
- **Approved** — Merged as-is
- **Approved with changes** — Minor fixes requested
- **Changes requested** — Significant improvements needed
- **Rejected** — Doesn't meet standards (with explanation)

---

## Templates

### Issue Template: New Skill Submission
```markdown
**Skill Name:** 
**Source URL:** 
**License:** 
**Proposed Category:** 
**Proposed Subcategory:** 
**Description:** 
**Why this skill is useful:** 
**Testing performed:** 
```

### Issue Template: Skill Improvement
```markdown
**Skill Path:** skills/[category]/[subcategory]/[skill-name]/
**Issue Type:** [Documentation/Bug/Enhancement/Update]
**Description:** 
**Proposed Change:** 
```

### Pull Request Template
```markdown
**Type:** [New Skill / Improvement / Fix / Category Change]
**Skill:** [Name or path]
**Source:** [URL]
**License:** [License type]
**Changes:** 
- 
**Testing:** 
**Checklist:**
- [ ] No duplicate exists
- [ ] License verified compatible
- [ ] Both README.md and SKILL.md created
- [ ] YAML frontmatter valid
- [ ] Categorization correct
- [ ] Indexes updated (SKILLS_INDEX.md, CATEGORY_INDEX.md if new category)
```

---

## Audit Requirements for Contributors

### Read-Only Audit Understanding
Contributors should understand that every submission triggers automated validation and may be subject to read-only audits that verify:
- Skill counts per subcategory (100 minimum target)
- Source and licensing documentation completeness
- Security review (no prompt injection, data exfiltration, credential exposure, malicious scripts, unsafe execution, excessive permissions)
- Index consistency
- No untrusted code execution during review

### What Contributors Can Expect
- Automated checks via `scripts/validate.mjs` and `scripts/build-index.mjs`
- Human review of skill quality, specificity, licensing, and security
- Audit trail in `AUDIT_REPORT.md` and `RUNNING.md`
- Transparent pass/fail/warning criteria

---

## Enhanced Source Documentation

Every skill submission MUST include a complete *Sources and Licensing* section in README.md with:
- Original source name and direct URL
- Author or organisation
- Source type and repository
- Original version or commit
- Discovery and last-verification dates
- Licence name and SPDX identifier (where available)
- Link to licence terms
- Adaptation and redistribution permissions
- Attribution requirements and modifications
- Whether independently authored or adapted

**Verification:** The maintainer will verify the original source and licence directly before accepting. Search summaries and unverified licence claims are not sufficient.

---

## Individual Skill Licensing

- Root `LICENSE` (MIT) applies ONLY to project-owned material (docs, scripts, structure)
- Each skill MUST accurately identify its own applicable licence in:
  - SKILL.md frontmatter `license` field (SPDX identifier or licence file reference)
  - README.md *Sources and Licensing* section
- Never assign root MIT licence to third-party/adapted material
- If source has no licence, unclear terms, or incompatible conditions: do not submit without explicit permission/legal review

---

## Security Review Process

All skills undergo security review for:
- **Prompt injection:** Instructions to ignore previous instructions, reveal system prompts, etc.
- **Data exfiltration:** Sending data to external destinations without user consent
- **Credential exposure:** Hardcoded keys, reading env vars beyond scope
- **Malicious scripts:** Shell commands, code execution, filesystem access beyond scope
- **Unsafe remote execution:** Arbitrary code download/execution, unrestricted network calls
- **Excessive permissions:** Admin/root requests, broad filesystem access, credential access

**Important:** Reviewers do NOT execute untrusted skill scripts during review. Static analysis only.

A failed security check blocks skill approval.

---

## Getting Help

- Check existing issues and discussions
- Review our [Skill Submission Process](#skill-submission-process) for project operating procedures
- Run `node scripts/validate.mjs` for validation requirements
- Ask questions in GitHub Discussions (when available)

---

*Thank you for making AI agents more capable!*