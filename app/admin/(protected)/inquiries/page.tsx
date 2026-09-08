"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

type Inquiry = {
  id: string;
  parentName: string;
  phone: string;
  email: string | null;
  childName: string | null;
  childLevel: string | null;
  message: string;
  status: string;
  createdAt: string;
};

export default function AdminInquiriesPage() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadItems() {
    const response = await fetch("/api/admin/inquiries");
    setItems(await response.json());
    setLoading(false);
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function markContacted(id: string) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "contacted" }),
    });
    await loadItems();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this inquiry?")) return;
    await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    await loadItems();
  }

  const newCount = items.filter((item) => item.status === "new").length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold text-brand">
            Enrollment Inquiries
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">
            {newCount} unread · {items.length} total
          </p>
        </div>
      </div>

      {loading ? (
        <p className="mt-6 text-sm text-slate-500">Loading inquiries…</p>
      ) : items.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-card">
          No inquiries yet. New submissions from the homepage form will appear
          here.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-brand">
                      {item.parentName}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        item.status === "new"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.status === "new" ? "New" : "Contacted"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => markContacted(item.id)}
                    disabled={item.status !== "new"}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-green-200 px-3 py-1.5 text-sm text-green-700 transition enabled:hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FaCheck className="h-3 w-3" /> Mark contacted
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <FaTrash className="h-3 w-3" /> Delete
                  </button>
                </div>
              </div>

              <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Phone
                  </dt>
                  <dd className="font-medium text-slate-700">
                    <a href={`tel:${item.phone}`} className="hover:underline">
                      {item.phone}
                    </a>
                  </dd>
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Email
                  </dt>
                  <dd className="font-medium text-slate-700">
                    {item.email ? (
                      <a href={`mailto:${item.email}`} className="hover:underline">
                        {item.email}
                      </a>
                    ) : (
                      "—"
                    )}
                  </dd>
                </div>
              </dl>

              <div className="mt-2 flex flex-wrap gap-2 text-sm font-medium text-brand">
                {item.childName ? (
                  <span className="rounded-full bg-brand-50 px-3 py-1">
                    Child: {item.childName}
                  </span>
                ) : null}
                {item.childLevel ? (
                  <span className="rounded-full bg-brand-50 px-3 py-1">
                    Level: {item.childLevel}
                  </span>
                ) : null}
              </div>

              {item.message ? (
                <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
                  {item.message}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}