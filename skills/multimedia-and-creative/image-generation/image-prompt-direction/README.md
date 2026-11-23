# image-prompt-direction

## What it does

Converts a visual brief into a structured prompt covering subject, composition, lighting, lens,
palette, and texture, then iterates by changing one variable at a time. For sets, it freezes the
shared style slots in a `STYLE.md` so images stay consistent.

## Why it exists

Image prompting usually fails through under-specification or over-specification: a one-line
brief that leaves composition to chance, or a 200-word prompt where constraints contradict and
the model silently drops half of them. Separating the decisions, ordering them consistently, and
iterating one variable at a time makes the result reproducible and explainable.

## When to use

- Producing a hero image, illustration, or social visual from a brief.
- Building a consistent series for a page or campaign.
- Fixing a prompt that produces unusable compositions.
- Matching an existing brand's visual language.

## When not to use

- Technical image editing (masking, retouching) — see `product-photo-retouch`.
- Diagrams and charts, which should be generated as vector or code, not as images.
- Anything requiring a real photograph of a real event.

## Requirements

- An image-generation model or tool.
- The placement and purpose of the image.
- Any brand reference or palette, if consistency is required.

## How to use

1. Fill the nine-slot brief; the agent asks about missing purpose and composition.
2. The agent writes a prompt under ~80 words in the fixed order.
3. Generate, then change exactly one slot per iteration.
4. Record each version and why it changed.
5. For a series, reuse `STYLE.md` rather than the previous prompt text.

## Example

```
Use image-prompt-direction for a warm homepage hero, text overlay on the left, 16:9.
```

Result: a filled brief, three iterations isolating composition, lighting, and texture, and a
`STYLE.md` reused for four matching section images.

## Limitations

- Output quality depends on the model; the skill structures the request, it does not guarantee it.
- Cannot guarantee exact hex colours or exact typography.
- Consistency across a series is approximate, not pixel-identical.
- Refuses to imitate a named living artist or generate a real person without authorisation.

## Source and attribution

Originally authored for Community List. The slot-based decomposition is standard art-direction
practice applied to generative prompting; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
