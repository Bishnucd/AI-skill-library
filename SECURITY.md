# Security Policy

## The threat model for a skills library

A skill is executable advice. When an agent loads a `SKILL.md`, that text enters the
model's context and can change its behaviour. The realistic risks are:

1. **Prompt injection** – instructions hidden in a skill that tell the agent to ignore
   the user, exfiltrate data, or take destructive actions.
2. **Data exfiltration** – a skill that sends file contents, environment variables, or
   credentials to an external endpoint.
3. **Unreviewed execution** – a bundled script that runs automatically or downloads and
   runs remote code.
4. **Privilege escalation** – a skill that asks for broader credentials or permissions
   than its task requires.
5. **Dependency compromise** – an imported skill that pulls in a malicious package.

## Rules this repository enforces

- Every skill is reviewed by a human before merge.
- Skills must not contain instructions to hide actions from the user.
- Bundled scripts are optional, must be readable in full, and must not fetch and execute
  remote code.
- `scripts/validate.mjs` runs on every pull request and never executes skill content.
- Credentials must never appear in a skill, an example, or a log.

## Reporting a vulnerability

Do not open a public issue for a security problem.

Report privately to the maintainer listed in the repository profile, or use GitHub's
private vulnerability reporting if it is enabled. Include:

- The skill path or file involved.
- What the content does and why it is dangerous.
- A minimal reproduction, if one exists.
- Whether you believe it has been used.

You will receive an acknowledgement within seven days. Confirmed issues are fixed by
removing or rewriting the skill, and the removal is recorded in `RUNNING.md`.

## Scope

In scope: content in this repository, its validation scripts, and its CI workflow.
Out of scope: vulnerabilities in third-party tools that a skill merely mentions, and
issues that require an already-compromised machine.

## Supported versions

This is a continuously maintained content repository. Only the current `main` branch is
supported; there are no versioned releases to patch.
