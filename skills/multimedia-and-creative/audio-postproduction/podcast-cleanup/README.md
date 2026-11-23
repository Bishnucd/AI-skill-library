# podcast-cleanup

## What it does

Cleans and masters spoken-word audio in a fixed order: edit, DC/rumble removal, restrained noise
reduction, per-speaker dynamics, de-essing, loudness matching, and limiting to a measured target
with a true-peak ceiling. Reports the measured LUFS, loudness range, and true peak of the
exported file.

## Why it exists

Audio processing is easy to overdo. Aggressive denoising creates metallic artefacts, gating
pumps, normalising to 0 dBFS clips on encode, and two speakers end up 4 LU apart. A fixed order
plus measured targets keeps the result natural and consistent, and forces the numbers to come
from the exported file rather than from the tool's preview.

## When to use

- Publishing a podcast, interview, or voice-over.
- Speakers recorded on different equipment or in different rooms.
- Audible hiss, hum, clicks, or inconsistent levels.

## When not to use

- Music mixing and mastering, which has different targets and tools.
- Severely reverberant recordings where the room is the dominant problem; re-record instead.
- Forensic audio, where alteration must be minimal and documented differently.

## Requirements

- The source audio at its native quality.
- A DAW or a processing chain (Audacity, Reaper, ffmpeg with filters, or a script).
- A loudness meter that reports integrated LUFS and true peak.

## How to use

1. Provide the audio, speaker layout, and target platform.
2. The agent assesses noise floor, levels, and echo before processing.
3. It edits first, then processes in the fixed order.
4. It measures the exported file and reports the numbers.
5. It lists anything that could not be fixed.

## Example

```
Use podcast-cleanup on two separate host tracks, target −16 LUFS stereo.
```

Result: a master at −16.0 LUFS and −1.2 dBTP, 8 dB of denoising on the noisy track, matched
speaker levels within 0.6 LU, and three clipped syllables documented.

## Limitations

- Cannot remove room echo without risking intelligibility.
- Denoising above ~12 dB produces audible artefacts.
- Loudness targets vary by platform; the skill states its assumption.
- Cannot restore clipped audio.

## Source and attribution

Originally authored for Community List. Loudness targets follow the widely used −16 LUFS stereo
podcast convention and the −1 dBTP true-peak ceiling; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
