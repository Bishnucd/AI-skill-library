#!/usr/bin/env node
/**
 * Community List – structural validator.
 *
 * Zero dependencies. Runs offline. Does not execute any skill content.
 *
 *   node scripts/validate.mjs
 *   node scripts/validate.mjs --quiet     (errors only)
 *
 * Exit code 0 = no errors (warnings allowed), 1 = errors found.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SKILLS = path.join(ROOT, "skills");
const QUIET = process.argv.includes("--quiet");

const REQUIRED_CATEGORIES = [
  "agent-technologies",
  "api-development",
  "app-development",
  "automation-workflows",
  "business-productivity",
  "cloud-devops",
  "communication-integrations",
  "cybersecurity",
  "data-analytics",
  "data-engineering",
  "database-technologies",
  "ml-ai",
  "multimedia-and-creative",
  "product-management",
  "qa-testing",
  "search-research",
  "software-engineering",
  "technical-writing",
  "ui-ux-design",
  "website-development",
];

const CONTROL_FILES = [
  "README.md",
  "CONTRIBUTING.md",
  "CATEGORY_INDEX.md",
  "SKILLS_INDEX.md",
  "RESEARCH_SOURCES.md",
  "LICENSE",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
];

const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const results = [];
const push = (level, file, msg) => results.push({ level, file, msg });
const err = (file, msg) => push("error", file, msg);
const warn = (file, msg) => push("warn", file, msg);

function read(p) {
  return fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");
}

function listDirs(p) {
  if (!fs.existsSync(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name)
    .sort();
}

/** Minimal YAML-subset parser: top-level scalars, quoted strings, one nested map. */
function parseFrontmatter(text) {
  if (!text.startsWith("---")) return { ok: false, reason: "file does not start with ---" };
  const close = text.indexOf("\n---", 3);
  if (close === -1) return { ok: false, reason: "frontmatter is not closed with ---" };
  const raw = text.slice(4, close);
  const body = text.slice(close + 4).trim();
  const data = {};
  let currentMap = null;

  for (const line of raw.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const indented = /^\s+\S/.test(line);
    const m = line.match(/^\s*([A-Za-z0-9_.-]+):\s*(.*)$/);
    if (!m) return { ok: false, reason: `unparseable frontmatter line: ${JSON.stringify(line)}` };
    const [, key, valueRaw] = m;
    const value = valueRaw.trim().replace(/^["'](.*)["']$/, "$1");
    if (indented) {
      if (!currentMap) return { ok: false, reason: `indented key "${key}" without parent map` };
      data[currentMap][key] = value;
    } else if (value === "") {
      currentMap = key;
      data[key] = {};
    } else {
      currentMap = null;
      data[key] = value;
    }
  }
  return { ok: true, data, body, raw };
}

function walkMarkdown(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMarkdown(full, acc);
    else if (entry.name.toLowerCase().endsWith(".md")) acc.push(full);
  }
  return acc;
}

// ---------------------------------------------------------------- control files
for (const f of CONTROL_FILES) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) err(f, "required control file is missing");
  else if (read(p).trim().length < 50) err(f, "control file is effectively empty");
}

// ---------------------------------------------------------------- category tree
if (!fs.existsSync(SKILLS)) {
  err("skills/", "skills directory is missing");
}

const categories = listDirs(SKILLS);
for (const c of REQUIRED_CATEGORIES) {
  if (!categories.includes(c)) err("skills/", `documented category "${c}" has no folder`);
}
for (const c of categories) {
  if (!REQUIRED_CATEGORIES.includes(c)) {
    warn("skills/", `category "${c}" is not in CATEGORY_INDEX.md / REQUIRED_CATEGORIES`);
  }
  if (!NAME_RE.test(c)) err("skills/", `category name "${c}" is not kebab-case`);
}

const skills = []; // { name, category, subcategory, dir, frontmatter, bodyHash }

for (const category of categories) {
  const catDir = path.join(SKILLS, category);
  const subs = listDirs(catDir);
  if (subs.length === 0) err(category, "category has no subcategories");
  for (const sub of subs) {
    if (!NAME_RE.test(sub)) err(`${category}/${sub}`, "subcategory name is not kebab-case");
    const subDir = path.join(catDir, sub);
    const entries = fs.readdirSync(subDir, { withFileTypes: true });
    const strayFiles = entries.filter((e) => e.isFile());
    if (strayFiles.length) {
      err(`${category}/${sub}`, `stray files at subcategory level: ${strayFiles.map((f) => f.name).join(", ")}`);
    }
    const skillDirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith("."));
    if (skillDirs.length === 0) err(`${category}/${sub}`, "subcategory contains no skills");
    for (const d of skillDirs) {
      skills.push({ name: d.name, category, subcategory: sub, dir: path.join(subDir, d.name) });
    }
  }
}

// ---------------------------------------------------------------- category index cross-check
const catIndexPath = path.join(ROOT, "CATEGORY_INDEX.md");
if (fs.existsSync(catIndexPath)) {
  const text = read(catIndexPath);
  const documented = new Map();
  for (const sec of text.split(/\n##\s+/).slice(1)) {
    const head = sec.split("\n")[0].trim();
    const m = head.match(/^\d+\.\s+([a-z0-9-]+)$/);
    if (!m) continue;
    const subs = new Set();
    const plannedSubs = new Set();
    for (const line of sec.split("\n").slice(1)) {
      const b = line.match(/^\s*-\s+`([a-z0-9-]+)`/);
      if (!b) continue;
      if (/\*\(planned\)\*/.test(line)) plannedSubs.add(b[1]);
      else subs.add(b[1]);
    }
    documented.set(m[1], { subs, plannedSubs });
  }
  for (const [cat, { subs, plannedSubs }] of documented) {
    const catDir = path.join(SKILLS, cat);
    if (!fs.existsSync(catDir)) {
      if (subs.size === 0 && plannedSubs.size > 0) {
        // Purely planned category; folder not required until skills are populated
        continue;
      }
      err("CATEGORY_INDEX.md", `documents category "${cat}" but the folder does not exist`);
      continue;
    }
    const actual = new Set(listDirs(catDir));
    for (const s of subs) {
      if (!actual.has(s)) err("CATEGORY_INDEX.md", `documents subcategory "${cat}/${s}" but no such folder`);
    }
    for (const s of plannedSubs) {
      if (actual.has(s)) {
        warn("CATEGORY_INDEX.md", `subcategory "${cat}/${s}" is marked planned but a folder exists; remove the marker`);
      }
    }
    for (const a of actual) {
      if (!subs.has(a) && !plannedSubs.has(a)) {
        warn("CATEGORY_INDEX.md", `subcategory "${cat}/${a}" exists but is not documented`);
      }
    }
  }
  for (const c of categories) {
    if (!documented.has(c)) warn("CATEGORY_INDEX.md", `category "${c}" has no section in the index`);
  }
}

// ---------------------------------------------------------------- each skill
const seenNames = new Map();
const seenHashes = new Map();

for (const s of skills) {
  const rel = path.relative(ROOT, s.dir).replace(/\\/g, "/");
  if (!NAME_RE.test(s.name)) err(rel, "skill folder name is not kebab-case");
  if (s.name.length > 64) err(rel, "skill folder name exceeds 64 characters");
  if (seenNames.has(s.name)) err(rel, `duplicate skill folder name (also at ${seenNames.get(s.name)})`);
  seenNames.set(s.name, rel);

  const readmePath = path.join(s.dir, "README.md");
  const skillPath = path.join(s.dir, "SKILL.md");

  if (!fs.existsSync(readmePath)) err(rel, "README.md is missing");
  if (!fs.existsSync(skillPath)) err(rel, "SKILL.md is missing");
  if (!fs.existsSync(skillPath)) continue;

  const skillText = read(skillPath);
  const readmeText = fs.existsSync(readmePath) ? read(readmePath) : "";

  if (skillText.trim().length < 300) err(rel, "SKILL.md is too short to be meaningful");
  if (readmeText && readmeText.trim().length < 300) err(rel, "README.md is too short to be meaningful");

  const fm = parseFrontmatter(skillText);
  if (!fm.ok) {
    err(`${rel}/SKILL.md`, `invalid frontmatter: ${fm.reason}`);
    continue;
  }
  const { name, description, license } = fm.data;

  if (!name) err(`${rel}/SKILL.md`, "frontmatter is missing required field: name");
  else {
    if (!NAME_RE.test(name)) err(`${rel}/SKILL.md`, `frontmatter name "${name}" must be kebab-case`);
    if (name !== s.name) err(`${rel}/SKILL.md`, `frontmatter name "${name}" does not match folder "${s.name}"`);
    if (/anthropic|claude/i.test(name)) err(`${rel}/SKILL.md`, "frontmatter name uses a reserved word");
  }

  if (!description) err(`${rel}/SKILL.md`, "frontmatter is missing required field: description");
  else {
    if (description.length > 1024) err(`${rel}/SKILL.md`, `description is ${description.length} chars (max 1024)`);
    if (description.length < 40) err(`${rel}/SKILL.md`, "description is too short to aid discovery");
    if (/[<>]/.test(description)) err(`${rel}/SKILL.md`, "description contains XML angle brackets");
    if (!/\buse when\b|\buse this\b|\bwhen the user\b/i.test(description)) {
      warn(`${rel}/SKILL.md`, "description does not state when to use the skill");
    }
  }

  if (!license) warn(`${rel}/SKILL.md`, "frontmatter has no license field");

  for (const key of Object.keys(fm.data)) {
    if (!["name", "description", "license", "compatibility", "metadata", "allowed-tools"].includes(key)) {
      warn(`${rel}/SKILL.md`, `non-standard frontmatter field "${key}"`);
    }
  }

  if (fm.data.compatibility && fm.data.compatibility.length > 500) {
    err(`${rel}/SKILL.md`, "compatibility exceeds 500 characters");
  }

  const lineCount = skillText.split("\n").length;
  if (lineCount > 500) warn(`${rel}/SKILL.md`, `${lineCount} lines (spec recommends under 500)`);

  if (readmeText) {
    if (!/^#\s+\S/m.test(readmeText)) err(`${rel}/README.md`, "README.md has no H1 heading");
    if (!/source|attribution/i.test(readmeText)) err(`${rel}/README.md`, "README.md has no source/attribution section");
    if (!/licen[cs]e/i.test(readmeText)) err(`${rel}/README.md`, "README.md has no licence statement");
  }

  const hash = crypto.createHash("sha1").update(fm.body.replace(/\s+/g, " ").trim()).digest("hex");
  if (seenHashes.has(hash)) err(rel, `identical SKILL.md body to ${seenHashes.get(hash)}`);
  seenHashes.set(hash, rel);
}

// ---------------------------------------------------------------- relative links
for (const file of walkMarkdown(ROOT)) {
  if (path.relative(ROOT, file).startsWith(".git")) continue;
  const text = read(file);
  const relFile = path.relative(ROOT, file).replace(/\\/g, "/");
  const linkRe = /\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m;
  while ((m = linkRe.exec(text))) {
    const target = m[1];
    if (/^(https?:|mailto:|#|\/\/)/i.test(target)) continue;
    const clean = decodeURIComponent(target.split("#")[0]);
    if (!clean) continue;
    const resolved = path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(resolved)) err(relFile, `broken relative link: ${target}`);
  }
}

// ---------------------------------------------------------------- index consistency
const indexPath = path.join(ROOT, "SKILLS_INDEX.md");
if (fs.existsSync(indexPath)) {
  const index = read(indexPath);
  for (const s of skills) {
    const rel = path.relative(ROOT, s.dir).replace(/\\/g, "/");
    if (!index.includes(rel)) err("SKILLS_INDEX.md", `missing entry for ${rel}`);
  }
}

// ---------------------------------------------------------------- report
const errors = results.filter((r) => r.level === "error");
const warnings = results.filter((r) => r.level === "warn");

const order = [...errors, ...warnings];
for (const r of order) {
  if (QUIET && r.level === "warn") continue;
  console.log(`${r.level === "error" ? "ERROR" : "WARN "}  ${r.file}  ${r.msg}`);
}

console.log("");
console.log(`Categories: ${categories.length}   Skills: ${skills.length}`);
console.log(`Errors: ${errors.length}   Warnings: ${warnings.length}`);
console.log(errors.length === 0 ? "RESULT: PASS" : "RESULT: FAIL");

process.exit(errors.length === 0 ? 0 : 1);
