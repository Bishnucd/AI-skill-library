# document-batch-pipeline

## What it does

Turns a folder of documents into a safe, rerunnable batch job: inventory with hashes, a dry
run and plan file, per-file error isolation, atomic writes, a manifest of results, and a
resume mode that skips work already done.

## Why it exists

Batch conversion scripts usually fail in production ways: one corrupt file aborts the run,
outputs overwrite originals, a second run duplicates everything, and nobody can tell which of
the 1,284 files succeeded. This skill treats those as the core requirements rather than
edge cases.

## When to use

- Converting or extracting from many documents at once.
- Filing or renaming documents by content.
- Making a one-off script safe to rerun.
- Recovering from a batch that partially failed.

## When not to use

- A single document — just convert it.
- Real-time processing of a stream of documents; that needs a queue design.
- Content that legally must not leave the machine; local-only processing is required and the
  skill will refuse third-party APIs unless permitted.

## Requirements

- Node.js or Python, plus the relevant library (e.g. `pdf-lib`, `pdfplumber`, `sharp`).
- Read access to the input directory and write access to a separate output directory.
- Free disk space for at least the output size.

## How to use

1. Point the agent at the input directory and describe the transformation.
2. Review the contract table and the dry-run plan.
3. Run for real; watch the summary.
4. Handle the failure list individually, then `--resume`.

## Example

```
Use document-batch-pipeline to OCR ./scans into searchable PDFs in ./out.
```

Result: a plan for 1,284 files, a run with 4 isolated failures (3 encrypted, 1 truncated), a
manifest, and a resume run that skips 1,280 unchanged inputs.

## Limitations

- OCR quality depends on the underlying engine and scan quality; the skill verifies output is
  readable but not that the text is accurate.
- Does not parallelise by default; very large batches are chunked rather than sped up.
- Cannot recover a corrupt source; it reports it.
- Manifest grows with the batch; very large runs produce a large JSON file.

## Source and attribution

Originally authored for Community List. The dry-run/manifest/resume pattern is standard
batch-processing practice; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
