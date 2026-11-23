#!/usr/bin/env node
/**
 * Community List – scaffold a new skill folder.
 *
 *   node scripts/new-skill.mjs <category> <subcategory> <skill-name>
 *
 * Creates skills/<category>/<subcategory>/<skill-name>/{SKILL.md,README.md}
 * using the project template. Refuses to overwrite an existing skill.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const [category, subcategory, skill] = process.argv.slice(2);
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

if (!category || !subcategory || !skill) {
  console.error("Usage: node scripts/new-skill.mjs <category> <subcategory> <skill-name>");
  process.exit(1);
}
for (const [label, value] of [["category", category], ["subcategory", subcategory], ["skill", skill]]) {
  if (!NAME_RE.test(value)) {
    console.error(`${label} "${value}" must be kebab-case (a-z, 0-9, single hyphens).`);
    process.exit(1);
  }
}

const dir = path.join(ROOT, "skills", category, subcategory, skill);
if (fs.existsSync(dir)) {
  console.error(`Refusing to overwrite existing path: ${path.relative(ROOT, dir)}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const skillMd = `---
name: ${skill}
description: One sentence on what this does. Use when the user asks to <concrete trigger phrases>.
license: MIT
metadata:
  author: community-list
  version: "0.1.0"
  created: "${today}"
---

# ${skill}

## When to use

- <situation 1>
- <situation 2>

Do not use this skill when <exclusion>.

## Inputs

| Input | Required | Notes |
|-------|----------|-------|
| <input> | yes | <format, size, source> |

## Workflow

1. <first concrete step>
2. <second concrete step>
3. <third concrete step>

## Rules

- <hard constraint>
- <safety constraint>

## Output format

<exact shape of the deliverable>

## Error handling

| Condition | Action |
|-----------|--------|
| <missing input> | <ask once, then stop> |

## Examples

**Input:** <short example>
**Output:** <short example>
`;

const readmeMd = `# ${skill}

## What it does

<two or three sentences, concrete>

## Why it exists

<the failure this prevents>

## When to use

- <situation>

## When not to use

- <situation>

## Requirements

- <runtime / tools / access>

## How to use

1. <step>
2. <step>

## Example

\`\`\`
<minimal worked example>
\`\`\`

## Limitations

- <known limit>

## Source and attribution

Originally authored for Community List. Format follows the Agent Skills
specification (https://github.com/agentskills/agentskills). No third-party content
is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "SKILL.md"), skillMd, "utf8");
fs.writeFileSync(path.join(dir, "README.md"), readmeMd, "utf8");

console.log(`Created ${path.relative(ROOT, dir)}`);
console.log("Next: fill in SKILL.md and README.md, then run:");
console.log("  node scripts/build-index.mjs && node scripts/validate.mjs");
