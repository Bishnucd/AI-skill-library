# Meeting Action Item Extractor Nlp

## Description
Extracts committed action items, owners, and due dates from conversational meeting transcripts using NLP. Use when automating meeting minutes and task creation in Jira or Linear.

## Purpose
Action items get buried in conversational transcripts. Linguistic dependency parsing and prompt extraction isolate commitment phrases ("I will send the report by Friday") into structured tasks.

## When to Use
- When executing meeting action item extractor nlp in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, spaCy / LLM) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- spaCy / LLM
- Action Item Detection
- Linear / Jira API

## Example Use Cases
### Automated Post-Meeting Follow-Up
Emailing all attendees a summary of their individual action items within 5 minutes of meeting end.

### Project Management Sync
Creating Linear issues automatically from engineering architecture review debates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://spacy.io/usage/linguistic-features
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
