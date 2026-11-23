# Biometric Authentication Faceid Touchid

## Description
Integrates Face ID, Touch ID, and Android BiometricPrompt for local device authentication. Use when securing mobile applications with biometric unlock and keychain protection.

## Purpose
Biometrics provide instant, passwordless app access. Modern mobile APIs query biometric hardware availability, prompt users, and unlock cryptographic keys stored in hardware Secure Enclaves.

## When to Use
- When executing biometric authentication faceid touchid in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (LocalAuthentication (iOS), BiometricPrompt (Android)) cannot be provisioned.

## Supported Technologies
- LocalAuthentication (iOS)
- BiometricPrompt (Android)
- Secure Enclave / Keystore

## Example Use Cases
### Banking App Quick Login
Allowing mobile banking users to unlock accounts in under one second via Face ID.

### Sensitive Transaction Authorization
Prompting for biometric fingerprint confirmation before authorizing wire transfers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (LocalAuthentication (iOS)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.android.com/training/sign-in/biometric-auth
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
