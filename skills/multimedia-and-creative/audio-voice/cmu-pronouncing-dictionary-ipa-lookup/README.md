# Cmu Pronouncing Dictionary Ipa Lookup

## Description
Transcribes English text into phonetic ARPAbet and IPA phoneme sequences using the CMU Pronouncing Dictionary. Use when fixing mispronounced words in TTS and speech recognition models.

## Purpose
TTS engines frequently mispronounce brand names, medical terms, and homographs. CMUDict maps English words to standardized phonetic pronunciations to force exact phonetic output.

## When to Use
- When executing cmu pronouncing dictionary ipa lookup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CMUDict, ARPAbet / IPA) cannot be provisioned.

## Supported Technologies
- CMUDict
- ARPAbet / IPA
- Phonetic Transcription
- Python / NLTK

## Example Use Cases
### Corporate Brand Name Pronunciation Correction
Ensuring TTS voice assistants pronounce proprietary product names accurately across languages.

### Pharmaceutical Drug Name TTS Synthesis
Forcing correct phonetic pronunciation of complex generic medication names in medical audio.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CMUDict) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** http://www.speech.cs.cmu.edu/cgi-bin/cmudict
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
