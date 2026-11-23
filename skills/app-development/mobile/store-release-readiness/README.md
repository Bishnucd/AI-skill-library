# store-release-readiness

## What it does

Audits a release candidate against the checks that actually cause App Store and Play Store
rejections: versioning, signing, permission strings, privacy manifests and data-safety
forms, metadata accuracy, and common behavioural traps. Returns a blocked / ready verdict
with evidence for every finding.

## Why it exists

Store rejection cycles cost days. Most rejections come from a small set of recurring
mistakes — a missing usage-description string, an unused permission, a privacy form that
does not match the SDKs in the build — and those are checkable before submitting. This
skill makes that check systematic and evidence-based.

## When to use

- Preparing a build for submission.
- After a rejection, to catch the remaining issues in one pass.
- Inheriting an app and needing to know if it can ship.

## When not to use

- Web app deployment — different review model entirely.
- Internal enterprise distribution, which has its own signing rules.
- Feature QA; this is a compliance and packaging audit, not a test plan.

## Requirements

- The release build, or its configuration files and metadata.
- Access to signing configuration (without exposing secrets in output).
- The current store policy pages for the categories the app touches.

## How to use

1. Give the agent the platform, version, build number, and distribution track.
2. It asks the four qualifying questions (accounts, payments, health, children/location).
3. It inspects configuration and metadata, and fetches current policy requirements.
4. It returns a verdict, blockers, risks, passes, and an explicit "not verified" list.
5. Fix blockers, rebuild with a higher build number, and re-run.

## Example

```
Use store-release-readiness for the Android production track, versionName 3.1.0, versionCode 47.
```

Result: BLOCKED on a background-location permission with no declared use and a data-safety
form that omits the crash-reporting SDK; three risks; nine passes.

## Limitations

- Cannot guarantee approval; reviewer judgement is outside any checklist.
- Policy requirements change; the skill re-checks pages but may miss a recent update.
- Cannot inspect store-console-only fields without access.
- Does not replace a security review of the app itself.

## Source and attribution

Originally authored for Community List. Checklist structure informed by publicly documented
App Store Review Guidelines and Google Play Developer Program Policies; no text from those
documents is reproduced. Verify current requirements at the official sources before
submitting.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
