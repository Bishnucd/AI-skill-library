# app-packaging-signing

## What it does

Takes a desktop app from source to signed, installable artefacts for Windows, macOS, and
Linux, including the auto-update feed and a verification pass on a clean machine. Covers
Electron and Tauri configuration, Authenticode, Developer ID plus notarisation, and package
signing on Linux.

## Why it exists

Desktop shipping fails at the last mile: an unsigned binary triggers SmartScreen, an
un-notarised DMG is reported as damaged, an update feed has a stale hash, or the installer
drops a service it never removes. These are packaging problems with known fixes, and they
are almost never covered by the app's own test suite.

## When to use

- First desktop release.
- Adding a platform or an architecture.
- Users report OS security blocks on launch.
- Setting up or repairing auto-update.

## When not to use

- Mobile store submission — use `store-release-readiness`.
- Server deployment and containers.
- A local-only build for your own machine; signing is unnecessary overhead there.

## Requirements

- Node.js toolchain for Electron, or Rust for Tauri.
- A code-signing certificate per platform for distribution builds.
- Access to a clean VM or machine for verification.
- CI secrets configured for signing credentials.

## How to use

1. State framework, targets, and update strategy.
2. The agent writes the build configuration and a `RELEASE.md` command list.
3. Configure signing credentials in CI (the agent will not ask you to paste secrets).
4. Build each target on its native OS.
5. Verify on a clean machine using the checklist in step 6 of the skill.

## Example

```
Use app-packaging-signing for a Tauri app targeting win-x64 and linux-x64 with GitHub Releases updates.
```

Result: MSI and AppImage, GPG-signed checksums, `latest.json` with hashes, and a note that
Windows Authenticode is still unconfigured.

## Limitations

- Cannot obtain certificates; it can only document how to and use what exists.
- macOS notarisation requires an Apple Developer account and network access.
- Cannot fully simulate SmartScreen reputation, which accrues over time.
- Does not cover MSIX/AppX store packaging specifics.

## Source and attribution

Originally authored for Community List. References the public documentation for
`electron-builder`, Tauri bundler, Apple `notarytool`, and Microsoft `signtool`; no
third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
