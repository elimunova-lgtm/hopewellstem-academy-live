"use client";

import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash, FaKey, FaCheckCircle } from "react-icons/fa";

export default function AdminSettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    const response = await fetch("/api/admin/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error ?? "Unable to change password.");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSuccess(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  const passwordInputClass =
    "w-full rounded-lg border border-slate-300 px-3 py-2 pr-10 outline-none ring-brand focus:ring-2";

  return (
    <div className="max-w-lg">
      <h2 className="font-display text-2xl font-bold text-brand">Settings</h2>
      <p className="mt-2 text-slate-600">
        Update your admin password. You will keep your current session after
        changing it.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
          <FaKey className="h-3.5 w-3.5" />
          Change password
        </p>

        <label className="mt-5 block text-sm font-medium text-slate-700">
          Current password
          <input
            type={show ? "text" : "password"}
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            className="mt-1 rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand focus:ring-2 w-full"
            required
            autoComplete="current-password"
          />
        </label>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700">
            New password
          </label>
          <div className="relative mt-1">
            <input
              type={show ? "text" : "password"}
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              className={passwordInputClass}
              required
              minLength={8}
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShow((value) => !value)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-slate-500 transition hover:text-brand"
              aria-label={show ? "Hide passwords" : "Show passwords"}
            >
              {show ? (
                <FaEyeSlash className="h-4 w-4" />
              ) : (
                <FaEye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Confirm new password
          <input
            type={show ? "text" : "password"}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="mt-1 rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand focus:ring-2 w-full"
            required
            minLength={8}
            autoComplete="new-password"
          />
        </label>

        {error ? (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        {success ? (
          <p className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
            <FaCheckCircle className="h-4 w-4" />
            Password updated successfully.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 rounded-lg bg-brand px-4 py-2.5 font-semibold text-white transition hover:bg-brand/90 disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update password"}
        </button>
      </form>
    </div>
  );
}