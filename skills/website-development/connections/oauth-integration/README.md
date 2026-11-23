# oauth-integration

## What it does

Implements OAuth 2.0 / OpenID Connect sign-in with the correct flow per client type, PKCE, state
and nonce binding, per-client token storage, real signature and claim validation, refresh-token
rotation with reuse detection, and revocation on logout. Ends with a verification table of the
attacks the implementation should survive.

## Why it exists

OAuth is easy to make work and hard to make safe. The common failures are well known and still
shipped: implicit flow in a SPA, `state` generated but never checked, tokens in `localStorage`, a
JWT decoded but not verified, `redirect_uri` matched by prefix, and a logout that only clears the
client. Each has a specific fix, and each is covered by a test in this skill.

## When to use

- Adding social login or enterprise SSO.
- Debugging `invalid_state`, `redirect_uri_mismatch`, or `invalid_token`.
- Reviewing an existing auth implementation.
- Adding a machine-to-machine client.

## When not to use

- Session management for a system with no external identity provider.
- SAML-only enterprise integrations, which have a different assertion model.
- API key authentication, which is simpler and has its own rules.

## Requirements

- A registered OAuth client (client ID, secret, redirect URIs).
- The provider's discovery document (`/.well-known/openid-configuration`).
- Server-side session storage for the BFF pattern.

## How to use

1. State the client type and the provider.
2. The agent selects the flow and writes the authorization and token requests.
3. It sets the token storage and validation rules for your client type.
4. It implements refresh, rotation, and revocation.
5. Run the verification table; every row must behave as stated.

## Example

```
Use oauth-integration to add Google sign-in to a Next.js app.
```

Result: PKCE through a BFF, HttpOnly state/nonce cookies, server-side tokens, audience validation,
rotating refresh tokens, and eight passing verification tests.

## Limitations

- Assumes a standards-compliant provider; non-compliant IdPs need documented workarounds.
- Does not configure the provider's consent screen or branding.
- Cannot test against a provider without credentials.
- SAML and proprietary SSO protocols are out of scope.

## Source and attribution

Originally authored for Community List. References the OAuth 2.0 framework (RFC 6749), PKCE
(RFC 7636), OAuth 2.0 Security Best Current Practice (RFC 9700), and OpenID Connect Core 1.0 as
public specifications. No text from those documents is reproduced and no third-party skill content
is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
