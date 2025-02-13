import { createClient } from "@libsql/client";
import {PUBLIC_TURSO_DATABASE_URL, PUBLIC_TURSO_AUTH_TOKEN} from "$env/static/public"

export const turso = createClient({
  url: PUBLIC_TURSO_DATABASE_URL,
  authToken: PUBLIC_TURSO_AUTH_TOKEN,
});
