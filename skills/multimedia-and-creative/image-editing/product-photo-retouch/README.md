# product-photo-retouch

## What it does

Runs a fixed retouch sequence for product photography — perspective, crop, background, white
balance, exposure, defect removal, shadow, export — and matches every image to a set-level
standard so a category page looks consistent. Each step has a verification check.

## Why it exists

Product images are usually retouched one at a time, by eye, in whatever order the editor prefers.
The result is a grid where backgrounds are three different whites, products are three different
sizes, and shadows fall in three directions. A fixed order plus a set-level reference removes
that variance, and the "do not fabricate" rules keep the image honest.

## When to use

- Preparing catalogue or marketplace images.
- Normalising a batch of supplier photos.
- Making a product set visually consistent.
- Removing a background while keeping a believable shadow.

## When not to use

- Creative or lifestyle photography where mood is the point.
- Medical or forensic imaging, which has its own standards.
- Images you are not licensed to modify.

## Requirements

- The source images and their native resolution.
- The destination marketplace's image specification.
- An editor or scripted pipeline (ImageMagick, sharp, or a layered editor).
- A neutral reference in the frame, if colour accuracy matters.

## How to use

1. State the destination and its spec.
2. The agent sets the target parameters and works through the fixed order.
3. It applies a preset to the batch, then spot-checks 10%.
4. It logs per-image changes and flags anything below native resolution.
5. Verify at thumbnail, grid, and full size before publishing.

## Example

```
Use product-photo-retouch on ./supplier for a marketplace needing 2000×2000 white background.
```

Result: 40 consistent images, two flagged as low resolution, six needing manual masking, and a
retouch log recording the preset and the reference image used.

## Limitations

- Cannot recover detail that is not in the source.
- Automated masking struggles with transparent, reflective, and mesh products; those need manual
  work and are flagged.
- Colour accuracy depends on a reference; without one it is an estimate.
- Does not produce lifestyle scenes or composite backgrounds.

## Source and attribution

Originally authored for Community List. The retouch order and export checks reflect standard
catalogue-photography practice; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
