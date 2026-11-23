# Ios Keychain Secure Token Storage

## Description
Stores and retrieves sensitive credentials using the iOS Keychain Services API with accessibility constraints. Use when safeguarding passwords and tokens across app re-installs on iOS.

## Purpose
UserDefaults is stored as plaintext XML on disk. iOS Keychain provides hardware-encrypted, access-controlled key-value storage that persists safely across application updates and re-installs.

## When to Use
- When executing ios keychain secure token storage in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (iOS Keychain Services, SecItem API) cannot be provisioned.

## Supported Technologies
- iOS Keychain Services
- SecItem API
- Swift
- Secure Enclave

## Example Use Cases
### JWT Secret Persistence
Storing user authentication session tokens with hardware encryption.

### Secure Enclave Hardware Key Binding
Binding cryptographic private keys to device Secure Enclave chips.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (iOS Keychain Services) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/documentation/security/keychain_services
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
