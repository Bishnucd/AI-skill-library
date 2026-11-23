# Shopify Admin Graphql Order Webhook

## Description
Ingests Shopify order fulfillment events and queries Admin GraphQL API for inventory sync. Use when integrating e-commerce backends with Shopify merchant stores.

## Purpose
Connecting to Shopify requires listening to order/fulfillment webhooks and querying the Shopify Admin GraphQL API to synchronize inventory, fulfill orders, and update customer profiles.

## When to Use
- When executing shopify admin graphql order webhook in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Shopify Admin GraphQL, Webhooks) cannot be provisioned.

## Supported Technologies
- Shopify Admin GraphQL
- Webhooks
- E-Commerce Integration
- HMAC Verification

## Example Use Cases
### Automated 3PL Warehouse Fulfillment Sync
Forwarding new Shopify orders to third-party logistics fulfillment centers automatically.

### Real-Time Multi-Channel Inventory Synchronization
Updating Shopify stock levels immediately when products sell on Amazon or physical POS systems.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Shopify Admin GraphQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://shopify.dev/docs/api/admin-graphql
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
