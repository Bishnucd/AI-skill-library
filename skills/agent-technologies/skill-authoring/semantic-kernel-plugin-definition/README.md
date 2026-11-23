# Semantic Kernel Plugin Definition

## Description
Authors native and semantic plugins for Microsoft Semantic Kernel using typed decorators. Use when building enterprise AI skills within Microsoft Semantic Kernel architectures.

## Purpose
Microsoft Semantic Kernel organizes AI capabilities into modular Plugins. Decorating native methods with @kernel_function exposes them for automated planner orchestration.

## When to Use
- When executing semantic kernel plugin definition in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Semantic Kernel, C# / Python) cannot be provisioned.

## Supported Technologies
- Semantic Kernel
- C# / Python
- OpenAI / Azure
- JSON

## Example Use Cases
### Enterprise Azure AI Integration
Deploying agent capabilities across Microsoft 365 Copilot and Azure OpenAI ecosystems.

### Multi-Language Skill Portability
Sharing skill definitions across .NET and Python enterprise applications.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Semantic Kernel) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/microsoft/semantic-kernel
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
