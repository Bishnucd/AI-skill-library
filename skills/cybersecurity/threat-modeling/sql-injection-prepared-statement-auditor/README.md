# Sql Injection Prepared Statement Auditor

## Description
Audits database query construction across codebases to ensure 100% parameterized query and prepared statement enforcement. Use when eliminating SQL injection vulnerabilities.

## Purpose
String concatenation or f-strings in SQL queries allow attackers to bypass authentication and dump databases. Automated audits ensure all queries utilize parameterized placeholders ($1, ?).

## When to Use
- When executing sql injection prepared statement auditor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OWASP SQLi Prevention, Static Analysis) cannot be provisioned.

## Supported Technologies
- OWASP SQLi Prevention
- Static Analysis
- Prepared Statements
- SQLAlchemy / pg

## Example Use Cases
### Zero-Tolerance SQLi Elimination
Ensuring legacy database access layers are 100% converted to parameterized queries.

### Dynamic Sort Query Hardening
Preventing SQL injection through user-controlled table sorting parameters.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OWASP SQLi Prevention) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
