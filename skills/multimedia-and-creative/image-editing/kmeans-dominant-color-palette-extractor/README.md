# Kmeans Dominant Color Palette Extractor

## Description
Extracts dominant brand color palettes from imagery using K-Means unsupervised color clustering in CIELAB space. Use when generating adaptive UI themes matching hero images.

## Purpose
Extracting colors in RGB space fails because Euclidean distances do not match human color perception. Clustering pixel values in perceptually uniform CIELAB space extracts harmonious brand palettes.

## When to Use
- When executing kmeans dominant color palette extractor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (K-Means Clustering, CIELAB Color Space) cannot be provisioned.

## Supported Technologies
- K-Means Clustering
- CIELAB Color Space
- Scikit-Learn
- UI Theming

## Example Use Cases
### Dynamic Music Album Art UI Theming
Extracting dominant background and text contrast colors from album covers like Spotify mobile UI.

### Brand Design Asset Ingestion
Automatically detecting primary brand colors from corporate pitch deck graphics and logos.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (K-Means Clustering) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
