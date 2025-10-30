export type NotifyKind = "signin" | "signup";

const DEFAULT_NOTIFY_EMAIL = "fashiongainzzz@gmail.com";

export async function notifySignEvent(kind: NotifyKind, userEmail: string) {
  try {
    const targetEmail = import.meta.env.VITE_NOTIFY_EMAIL || DEFAULT_NOTIFY_EMAIL;
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

    const payload = {
      _subject: `Buendía: ${kind === "signin" ? "Sign In" : "Sign Up"} request`,
      event_type: kind,
      user_email_entered: userEmail,
      site_origin: typeof window !== "undefined" ? window.location.origin : "",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      timestamp: new Date().toISOString(),
      _template: "box",
    } as const;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(payload),
      mode: "cors",
    });

    // Attempt to parse JSON response from FormSubmit
    const data = await res
      .json()
      .catch(async () => ({ raw: await res.text().catch(() => "") }));

    // Treat either HTTP error or logical failure as an error
    if (!res.ok) {
      const text = typeof data === "object" ? JSON.stringify(data) : String(data);
      throw new Error(`Notify failed: ${res.status} ${text}`);
    }

    // FormSubmit responds with { success: "true" | "false", message?: string }
    const successField = (data as any)?.success;
    if (successField === false || successField === "false") {
      const message = (data as any)?.message || "Form submission not accepted";
      throw new Error(message);
    }

    return data;
  } catch (err) {
    // Swallow errors — upstream can decide how to surface
    throw err instanceof Error ? err : new Error("Unknown notify error");
  }
}
