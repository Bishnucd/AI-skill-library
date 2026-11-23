# Market Basket Apriori Association Mining

## Description
Discovers frequent itemsets and association rules (Support, Confidence, Lift) using the Apriori and FP-Growth algorithms. Use when building cross-selling product recommendation engines.

## Purpose
Retailers need to discover what products are purchased together. Association rule mining computes Support, Confidence, and Lift metrics to surface strong purchasing rules (e.g. {Bread, Butter} -> {Milk}).

## When to Use
- When executing market basket apriori association mining in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (mlxtend, Python 3.10+) cannot be provisioned.

## Supported Technologies
- mlxtend
- Python 3.10+
- FP-Growth / Apriori
- Pandas

## Example Use Cases
### E-commerce "Frequently Bought Together"
Surfacing high-lift product bundles dynamically during shopping cart checkout.

### Retail Shelf Layout Optimization
Placing complementary grocery goods in physical proximity based on basket affinity rules.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (mlxtend) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://rasbt.github.io/mlxtend/user_guide/frequent_patterns/apriori/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
