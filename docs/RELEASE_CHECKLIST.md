# Release Checklist

## Scope

This checklist defines the minimum release discipline for the Anclora blueprint project.

## 1. Pre-Release Gates (Required)

Run and keep output in the PR/release notes:

```bash
npm run -s check:next-swc
npm run -s lint
npm run -s type-check
npm run -s test
npm run -s build
```

Pass criteria:

- All commands return exit code `0`
- No new TypeScript errors
- No failing tests

Dependency note:

- Keep `next`, `eslint-config-next`, and platform `@next/swc-*` aligned to the same patch version when network access is available.
- If `check:next-swc` fails, run (with network enabled):

```bash
npm install next@<version> eslint-config-next@<version> @next/swc-win32-x64-msvc@<version> --save-exact
```

## 2. API Smoke Test (Required)

### 2.1 Health

`GET /api`

- Expected: `200`
- Expected keys: `message`, `endpoints`

### 2.2 Contact Create

`POST /api/contact` with valid body:

```json
{
  "name": "QA User",
  "email": "qa@example.com",
  "phone": "+34 600 000 000",
  "budget": 5000000,
  "interest": "investment",
  "message": "Release smoke test"
}
```

Expected:

- Status `201`
- `ok: true`
- `inquiry.id` present

### 2.3 Contact Validation

`POST /api/contact` with invalid email

- Expected: `400`
- Expected: `ok: false`, `error: "Invalid payload"`

### 2.4 Contact Rate Limit

Repeat `POST /api/contact` over limit from same IP

- Expected: `429`
- Expected header: `Retry-After`

## 3. UX Smoke Test (Required)

Manual checks in desktop + mobile:

- Landing render without console/runtime errors
- Language toggle `ES/EN` works
- Hero CTAs scroll correctly
- Gallery opens dialog and next/prev works
- Contact form success + validation states visible
- No broken image placeholders in primary sections

## 4. Release Metadata (Required)

Document in release notes:

- Commit/tag reference
- Included scope (features/fixes)
- Executed checks (from sections 1-3)
- Known non-blocking warnings (if any)

## 5. Rollback Plan (Required)

If release fails in production/staging:

1. Revert to previous known-good commit/tag.
2. Redeploy previous artifact.
3. Re-run smoke tests (`/`, `/api`, `/api/contact`).
4. Create incident note with:
   - failure timestamp
   - root cause hypothesis
   - impacted surfaces
   - corrective action owner

## 6. Exit Criteria

Release is complete only when:

- Sections 1-3 passed
- Release metadata recorded
- Rollback path validated and documented
