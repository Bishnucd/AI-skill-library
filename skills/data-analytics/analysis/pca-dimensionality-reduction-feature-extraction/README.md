# Pca Dimensionality Reduction Feature Extraction

## Description
Compresses high-dimensional feature spaces into principal components using Principal Component Analysis (PCA). Use when reducing multicollinearity and visualizing complex multivariate data.

## Purpose
Datasets with hundreds of features suffer from the curse of dimensionality. PCA projects data onto orthogonal eigenvectors that maximize variance, compressing data while retaining 95% of information.

## When to Use
- When executing pca dimensionality reduction feature extraction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Scikit-Learn, NumPy) cannot be provisioned.

## Supported Technologies
- Scikit-Learn
- NumPy
- Matplotlib
- Linear Algebra

## Example Use Cases
### Multivariate Customer Segmentation
Visualizing 50 behavioral metrics across customer accounts in a clean 2D scatter plot.

### Collinearity Reduction in Regression
Eliminating multicollinearity between correlated features before training linear models.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Scikit-Learn) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://scikit-learn.org/stable/modules/decomposition.html#pca
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
