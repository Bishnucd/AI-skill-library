# Diffusion Scheduler Ddim Euler Ancestral Tuning

## Description
Tunes diffusion noise schedulers and ODE solvers (Euler-A, DPM++ 2M Karras, DDIM) for optimal step convergence. Use when balancing generation speed with photorealistic fidelity.

## Purpose
Schedulers determine how Gaussian noise is subtracted across time steps. Second-order solvers like DPM++ 2M Karras achieve photorealism in 20 steps, halving compute costs compared to 50-step solvers.

## When to Use
- When executing diffusion scheduler ddim euler ancestral tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Diffusion Schedulers, DPM++ 2M Karras) cannot be provisioned.

## Supported Technologies
- Diffusion Schedulers
- DPM++ 2M Karras
- Euler-A
- DDIM

## Example Use Cases
### High-Throughput Image Generation API
Deploying DPM++ SDE Karras at 20 steps to serve 100 requests per minute per GPU.

### Deterministic Reproducible Generation
Using deterministic DDIM schedulers for exact seed-to-image reproducibility across platforms.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Diffusion Schedulers) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://huggingface.co/docs/diffusers/using-diffusers/schedulers
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
