# API

## `GET /api`

Health-style metadata endpoint.

### Response `200`

```json
{
  "message": "Anclora API",
  "endpoints": ["POST /api/contact"]
}
```

## `POST /api/contact`

Creates a contact inquiry for blueprint demonstration.

### Headers

- `Content-Type: application/json`

### Body

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+34 600 000 000",
  "budget": 5000000,
  "interest": "investment",
  "message": "Optional message"
}
```

### Validation

Server validates with Zod:

- `name`: 2..120 chars
- `email`: valid format
- `phone`: 6..32 chars
- `budget`: integer `500000..50000000`
- `interest`: `investment | residence | vacation`
- `message`: optional, max 3000 chars

### Rate Limit

- In-memory per-IP limiter
- 8 requests per 60 seconds
- Exceeded limit returns `429` with `Retry-After`

### Success Response `201`

```json
{
  "ok": true,
  "inquiry": {
    "id": "cuid...",
    "createdAt": "2026-02-23T..."
  }
}
```

### Persistence Note

- Current implementation persists inquiries in `db/inquiries.json`.
- Records survive server restarts and are append-only for demo tracking.

## `GET /api/contact`

Returns a lightweight summary for technical verification.

### Response `200`

```json
{
  "ok": true,
  "total": 12
}
```

### Error Responses

- `400`: invalid payload
- `429`: too many requests
- `500`: unexpected server error
