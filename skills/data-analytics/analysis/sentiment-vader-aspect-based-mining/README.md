# Sentiment Vader Aspect Based Mining

## Description
Extracts aspect-based sentiment scores from customer reviews using VADER and dependency parse trees. Use when isolating sentiment regarding specific product attributes (price, quality, battery).

## Purpose
Overall review sentiment obscures specific feedback ("Food was delicious, but service was terrible"). Aspect-based sentiment links sentiment adjectives to specific noun targets in customer feedback.

## When to Use
- When executing sentiment vader aspect based mining in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (vaderSentiment, spaCy) cannot be provisioned.

## Supported Technologies
- vaderSentiment
- spaCy
- Aspect-Based Sentiment
- Python

## Example Use Cases
### E-commerce Review Intelligence
Analyzing 10,000 Amazon product reviews to isolate recurring hardware complaints.

### Hotel Guest Feedback Analysis
Tracking customer satisfaction specifically regarding cleanliness vs check-in speed.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (vaderSentiment) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/cjhutto/vaderSentiment
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
