"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/portfolio-case-study-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setError(data.error ?? "Incorrect password.");
        return;
      }

      // Auth is server-verified; cookie is httpOnly. Reload so the server can render the protected content.
      window.location.reload();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex-col flex mx-auto py-24 px-8 md:px-24 max-w-2xl w-full">
      <h1 className="text-2xl">Protected Case Studies</h1>
      <p className="mt-3 text-neutral-500 text-sm">
        Enter the password to view the contents.
      </p>

      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3">
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="!outline-0 rounded-md border border-neutral-300 bg-white px-3 py-2 font-mono text-sm"
        />

        {error ? <p className="text-red-500 text-xs">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-black px-4 py-2 text-white text-sm disabled:opacity-60"
        >
          {loading ? "VERIFYING..." : "UNLOCK"}
        </button>
      </form>
    </div>
  );
}
