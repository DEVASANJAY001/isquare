/**
 * Generic error reporting utility.
 * Can be wired up to Sentry, Datadog, or any other error tracking service.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Error Boundary]", error, context);
  // TODO: wire up to your preferred error tracking (e.g. Sentry.captureException)
}
