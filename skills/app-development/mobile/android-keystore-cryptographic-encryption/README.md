# Android Keystore Cryptographic Encryption

## Description
Generates hardware-backed AES/RSA keys and encrypts sensitive application data using Android KeyStore. Use when securing secrets, auth tokens, and sensitive databases on Android.

## Purpose
Storing plaintext tokens on mobile flash memory invites extraction via rooted devices. The Android KeyStore system stores cryptographic keys inside secure hardware, making extraction impossible.

## When to Use
- When executing android keystore cryptographic encryption in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Android KeyStore, AES-256 GCM) cannot be provisioned.

## Supported Technologies
- Android KeyStore
- AES-256 GCM
- EncryptedSharedPreferences
- Kotlin

## Example Use Cases
### OAuth Refresh Token Protection
Safeguarding long-lived user authentication credentials on Android devices.

### Encrypted Local Database Key
Encrypting SQLCipher database encryption keys using hardware-backed keystores.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Android KeyStore) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.android.com/training/articles/keystore
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
