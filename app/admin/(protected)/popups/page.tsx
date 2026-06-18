"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

type PopupItem = {
  id: string;
  title: string;
  message: string;
  image: string | null;
  buttonLabel: string | null;
  buttonHref: string | null;
  published: boolean;
  sortOrder: number;
  startsAt: string | null;
  endsAt: string | null;
};

const emptyForm = {
  title: "",
  message: "",
  image: "",
  buttonLabel: "",
  buttonHref: "",
  published: true,
  sortOrder: 0,
  startsAt: "",
  endsAt: "",
};

export default function AdminPopupsPage() {
  const [items, setItems] = useState<PopupItem[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  async function loadItems() {
    const response = await fetch("/api/admin/popups");
    setItems(await response.json());
  }

  useEffect(() => {
    loadItems();
  }, []);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("");

    const payload = {
      ...form,
      image: form.image || null,
      buttonLabel: form.buttonLabel || null,
      buttonHref: form.buttonHref || null,
      startsAt: form.startsAt || null,
      endsAt: form.endsAt || null,
    };

    const response = await fetch(
      editingId ? `/api/admin/popups/${editingId}` : "/api/admin/popups",
      {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      setStatus("Could not save pop-up.");
      return;
    }

    setStatus(editingId ? "Pop-up updated." : "Pop-up created.");
    resetForm();
    await loadItems();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this pop-up?")) return;
    await fetch(`/api/admin/popups/${id}`, { method: "DELETE" });
    await loadItems();
  }

  function startEdit(item: PopupItem) {
    setEditingId(item.id);
    setForm({
      title: item.title,
      message: item.message,
      image: item.image ?? "",
      buttonLabel: item.buttonLabel ?? "",
      buttonHref: item.buttonHref ?? "",
      published: item.published,
      sortOrder: item.sortOrder,
      startsAt: item.startsAt ? item.startsAt.slice(0, 16) : "",
      endsAt: item.endsAt ? item.endsAt.slice(0, 16) : "",
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <h2 className="font-display text-xl font-bold text-brand">
          {editingId ? "Edit pop-up" : "Add pop-up"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Multiple published pop-ups rotate on the homepage. Use start/end dates to schedule campaigns.
        </p>
        <div className="mt-4 space-y-4">
          <Field label="Title" value={form.title} onChange={(value) => setForm({ ...form, title: value })} />
          <TextArea label="Message" value={form.message} onChange={(value) => setForm({ ...form, message: value })} />
          <ImageUpload
            label="Pop-up image or flyer"
            value={form.image}
            onChange={(value) => setForm({ ...form, image: value })}
          />
          <Field label="Button label (optional)" value={form.buttonLabel} onChange={(value) => setForm({ ...form, buttonLabel: value })} />
          <Field label="Button link (optional)" value={form.buttonHref} onChange={(value) => setForm({ ...form, buttonHref: value })} placeholder="/contact" />
          <Field label="Sort order" type="number" value={String(form.sortOrder)} onChange={(value) => setForm({ ...form, sortOrder: Number(value) })} />
          <Field label="Starts at (optional)" type="datetime-local" value={form.startsAt} onChange={(value) => setForm({ ...form, startsAt: value })} />
          <Field label="Ends at (optional)" type="datetime-local" value={form.endsAt} onChange={(value) => setForm({ ...form, endsAt: value })} />
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(event) => setForm({ ...form, published: event.target.checked })}
            />
            Published
          </label>
        </div>
        {status ? <p className="mt-4 text-sm text-green-700">{status}</p> : null}
        <div className="mt-6 flex gap-3">
          <button type="submit" className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">
            {editingId ? "Save changes" : "Create pop-up"}
          </button>
          {editingId ? (
            <button type="button" onClick={resetForm} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-brand">All pop-ups</h2>
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.message}</p>
                {item.buttonLabel ? (
                  <p className="mt-2 text-xs text-slate-500">
                    Button: {item.buttonLabel} → {item.buttonHref}
                  </p>
                ) : null}
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.published ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}>
                {item.published ? "Live" : "Draft"}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button type="button" onClick={() => startEdit(item)} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm">
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(item.id)} className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600">
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand focus:ring-2"
        required={type === "text"}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand focus:ring-2"
        required
      />
    </label>
  );
}
