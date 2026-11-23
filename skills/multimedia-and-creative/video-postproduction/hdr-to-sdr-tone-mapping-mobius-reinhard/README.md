# Hdr To Sdr Tone Mapping Mobius Reinhard

## Description
Converts HDR10 / Dolby Vision wide-gamut footage to standard BT.709 SDR video using Reinhard and Mobius tone mapping. Use when preventing washed-out colors on standard displays.

## Purpose
Playing HDR (BT.2020 PQ/HLG) video on standard SDR displays causes milky, washed-out grey tones. Tone mapping compresses high-dynamic range highlights into standard 100-nit Rec.709 color gamut.

## When to Use
- When executing hdr to sdr tone mapping mobius reinhard in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HDR to SDR, Tone Mapping) cannot be provisioned.

## Supported Technologies
- HDR to SDR
- Tone Mapping
- Mobius / Reinhard
- FFmpeg zscale

## Example Use Cases
### iPhone HDR Video Web Publication
Converting iPhone HDR clips into vibrant, punchy SDR video that looks stunning on older laptops and TVs.

### Broadcast TV Down-Conversion Pipeline
Down-converting live 4K HDR sports feeds into 1080p SDR for standard-definition cable channels.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HDR to SDR) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#tonemap
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
