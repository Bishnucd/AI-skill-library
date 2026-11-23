# GitHub Actions Matrix Build

## Description
Engineering guide and automation skill for designing robust multi-platform CI pipelines using GitHub Actions matrix execution.

## Purpose
Provides instructions for building scalable, secure, and cached CI workflows that test across platforms and runtimes without duplicating YAML workflow files.

## When to Use
- Setting up automated continuous integration for open-source libraries supporting multiple OS targets.
- Reducing pipeline execution time through parallel matrix workers and native dependency caching.
- Enforcing least-privilege token permissions across automated pull request checks.

## When NOT to Use
- Simple static websites with no build or test step.
- Continuous deployment pipelines requiring manual approval gates and environment change control (use dedicated deployment jobs).

## Supported Technologies
- GitHub Actions runner environments (Ubuntu, Windows, macOS)
- Node.js, Python, Rust, Go setup actions

## Dependencies
- GitHub repository with workflow write access enabled.

## Example Use Cases
### Use Case 1: Cross-Platform Node CLI Testing
Testing an npm CLI package across Ubuntu, Windows, and macOS against Node 18, 20, and 22 in parallel.

### Use Case 2: Multi-Python Package Validation
Validating wheels across Python 3.9 through 3.12 with Poetry dependency caching.

## Usage Instructions
1. Create `.github/workflows/ci.yml`.
2. Define least-privilege permissions and concurrency cancelation.
3. Configure `strategy.matrix` with desired runners and language versions.
4. Add checkout, setup, cache, and test steps with explicit timeouts.

## Limitations
- Consumes GitHub Actions minutes proportional to the number of matrix dimensions.
- Platform-specific path separators or shell differences must be handled inside test scripts.

## Source and Attribution
- **Original Source:** GitHub Actions Documentation and Best Practices
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
