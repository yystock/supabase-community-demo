import type { RequestEvent } from "@sveltejs/kit";
export function handleLoginRedirect(event: RequestEvent) {
  const redirectTo = event.url.pathname + event.url.search;
  return `/auth/login?redirectTo=${redirectTo}`;
}
