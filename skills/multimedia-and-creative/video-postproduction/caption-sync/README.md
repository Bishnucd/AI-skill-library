# caption-sync

## What it does

Produces synchronised, readable captions from a video: corrects the machine transcript, splits
cues at natural pauses within reading-speed and duration limits, aligns to the waveform, handles
overlapping speech and songs, positions captions clear of platform UI, and exports SRT and VTT.

## Why it exists

Auto-generated captions are usually accurate enough to look finished and wrong enough to
mislead: a brand name becomes a different word, cues exceed reading speed, timings drift with a
frame-rate mismatch, and captions sit under the UI on vertical video. Checking those specific
things turns captions from a compliance box into something people can actually use.

## When to use

- Adding captions to any video.
- Fixing captions that drift or are unreadable.
- Preparing subtitles for translation.
- Cutting vertical clips from a long video.

## When not to use

- Live captioning, which needs a real-time pipeline.
- Audio-only transcription with no video timing.
- Translation itself, which needs a native-speaker review step.

## Requirements

- The video and its audio.
- A transcription tool, and the ability to edit the output.
- The platform's caption specification and safe-area guidance.

## How to use

1. Provide the video and target platforms.
2. The agent produces a raw transcript, then a corrected one.
3. It splits cues within the limits and aligns them to the waveform.
4. It checks drift at five points across the runtime.
5. It exports SRT/VTT and writes the conventions used.

## Example

```
Use caption-sync on interview.mp4 for YouTube and 9:16 clips.
```

Result: 214 cues at ≤17 CPS, two inaudible passages marked, a corrected frame-rate conversion,
and a vertical-safe caption track.

## Limitations

- Accuracy depends on audio quality; unintelligible speech is marked, not guessed.
- Cannot verify translation quality without a native speaker.
- Burned-in captions are a render step; the sidecar file remains the source of truth.
- Reading-speed targets are guidelines; some platforms enforce their own.

## Source and attribution

Originally authored for Community List. Reading-speed and cue-length guidance follows common
captioning practice (BBC and Netflix subtitle style guides are widely used references); no text
from those guides is reproduced. No third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
