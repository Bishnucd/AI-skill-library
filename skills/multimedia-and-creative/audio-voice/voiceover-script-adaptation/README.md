# voiceover-script-adaptation

## What it does

Rewrites written copy into a narration script sized to a target duration at a stated words-per-
minute rate, with pause and emphasis marks, breath points, a pronunciation table, and a
text-to-speech compatibility check.

## Why it exists

Copy written for a page is too dense to speak. Sentences nest, numbers appear in written form,
and nobody has decided how to say the product name. The result is a rushed read or a string of
retakes. Converting to spoken rhythm and deciding pronunciation up front removes both.

## When to use

- Turning an article, page, or deck into narration.
- Fitting a script to a fixed video duration.
- Preparing text for a TTS engine.
- A recording sounded rushed or flat and needs a rewrite.

## When not to use

- Writing original creative copy; this adapts existing text.
- Dialogue for multiple characters, which needs performance direction.
- Subtitles, which follow different reading-speed rules.

## Requirements

- The source text and the target duration.
- The intended tone, audience, and accent.
- A pronunciation reference or a person who can confirm names.

## How to use

1. Provide the source, duration, and tone.
2. The agent computes the word budget and reports whether the source fits.
3. It rewrites for the ear and adds performance marks.
4. It writes the pronunciation table and a per-section timing estimate.
5. Read it aloud once; adjust any phrase that trips.

## Example

```
Use voiceover-script-adaptation on this 400-word page for a 90-second explainer.
```

Result: a 224-word marked script at 1:29, 14 breath marks, 6 pronunciation entries, and the two
sentences that were cut.

## Limitations

- Timing estimates are approximations; a real read is the only measurement.
- Cannot determine a brand's preferred pronunciation without input.
- TTS behaviour varies by engine; the skill flags traps but cannot guarantee output.
- Does not record or synthesise audio.

## Source and attribution

Originally authored for Community List. The 140–160 WPM conversational range is a common
narration guideline; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
