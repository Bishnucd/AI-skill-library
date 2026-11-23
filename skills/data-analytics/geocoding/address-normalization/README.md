# address-normalization

## What it does

Cleans and structures postal addresses in layers (encoding, whitespace, abbreviations, country
and subdivision codes, postal patterns), geocodes them with a recorded match type and
confidence, cross-validates the result, and sorts every row into auto-accept, review, or reject
instead of forcing a match.

## Why it exists

Geocoding pipelines usually report a 99% match rate and still send drivers to the wrong town,
because a locality-centroid match counts the same as a rooftop match. Keeping the original
address, recording precision, and routing low-confidence rows to a human makes the failure
visible and bounded.

## When to use

- Preparing an address list for delivery or routing.
- Matching addresses across two systems.
- Auditing addresses after failed deliveries.
- Building a geocoding step into a data pipeline.

## When not to use

- Address autocomplete in a UI, which needs a different real-time design.
- Addresses you are not permitted to send to a geocoding provider.
- Coordinate work that does not involve postal addresses.

## Requirements

- The address dataset and its country distribution.
- A geocoding provider with a licence that permits your use and caching.
- A parser that supports the countries present.

## How to use

1. Provide the dataset and the countries involved.
2. The agent profiles the data and shows 30 sampled rows with its planned normalisation.
3. It normalises in layers and records which layer changed each row.
4. It geocodes, cross-validates, and buckets by confidence.
5. It writes `normalized.csv` and a review report with the dominant failure patterns.

## Example

```
Use address-normalization on customers.csv for UK and Ireland delivery routing.
```

Result: 71% auto-accept, 24% review (mostly missing postcodes), 5% reject, plus a list of 60
provider disagreements over 2 km.

## Limitations

- Accuracy depends on the provider's coverage; rural and new-build addresses are weaker.
- Parsers are country-specific; unsupported countries fall back to review.
- Cannot verify that a human actually lives at an address.
- Provider caching restrictions vary; the skill flags them rather than assuming.

## Source and attribution

Originally authored for Community List. Uses ISO 3166-1 and ISO 3166-2 conventions for country
and subdivision codes. No third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
