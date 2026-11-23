# Rfm Customer Segmentation Clustering

## Description
Segments customers into behavioral personas using Recency, Frequency, Monetary (RFM) quintile scoring and K-Means. Use when tailoring marketing campaigns to customer lifecycle stages.

## Purpose
RFM analysis groups customers based on how recently they purchased, how often they purchase, and how much they spend, segmenting customers into Champions, Loyal, At-Risk, and Hibernating tiers.

## When to Use
- When executing rfm customer segmentation clustering in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Scikit-Learn, Pandas) cannot be provisioned.

## Supported Technologies
- Scikit-Learn
- Pandas
- K-Means Clustering
- RFM Scoring

## Example Use Cases
### At-Risk Customer Win-Back
Identifying once-frequent high-spending customers who haven't purchased in 60 days.

### Targeted Marketing Campaigns
Sending premium loyalty rewards exclusively to high-monetary frequent Champions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Scikit-Learn) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/scikit-learn/scikit-learn
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
