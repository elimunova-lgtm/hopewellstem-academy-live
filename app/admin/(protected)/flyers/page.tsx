"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

type FlyerItem = {
  id: string;
  title: string;
  image: string;
  caption: string;
  published: boolean;
  sortOrder: number;
};

const emptyForm = {
  title: "",
  image: "",
  caption: "",
  published: true,
  sortOrder: 0,
};

export default function AdminFlyersPage() {
  const [items, setItems] = useState<FlyerItem[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  async function loadItems() {
    const response = await fetch("/api/admin/flyers");
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

    const response = await fetch(
      editingId ? `/api/admin/flyers/${editingId}` : "/api/admin/flyers",
      {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      setStatus("Could not save flyer.");
      return;
    }

    setStatus(editingId ? "Flyer updated." : "Flyer created.");
    resetForm();
    await loadItems();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this flyer?")) return;
    await fetch(`/api/admin/flyers/${id}`, { method: "DELETE" });
    await loadItems();
  }

  function startEdit(item: FlyerItem) {
    setEditingId(item.id);
    setForm({
      title: item.title,
      image: item.image,
      caption: item.caption,
      published: item.published,
      sortOrder: item.sortOrder,
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <h2 className="font-display text-xl font-bold text-brand">
          {editingId ? "Edit flyer" : "Add flyer"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Upload posters and flyers. They appear on the gallery page and open full
          size when clicked.
        </p>
        <div className="mt-4 space-y-4">
          <Field
            label="Title"
            value={form.title}
            onChange={(value) => setForm({ ...form, title: value })}
          />
          <ImageUpload
            label="Flyer image or PDF"
            value={form.image}
            onChange={(value) => setForm({ ...form, image: value })}
          />
          <TextArea
            label="Caption (optional)"
            value={form.caption}
            onChange={(value) => setForm({ ...form, caption: value })}
            required={false}
          />
          <Field
            label="Sort order"
            type="number"
            value={String(form.sortOrder)}
            onChange={(value) => setForm({ ...form, sortOrder: Number(value) })}
          />
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(event) =>
                setForm({ ...form, published: event.target.checked })
              }
            />
            Published
          </label>
        </div>
        {status ? <p className="mt-4 text-sm text-green-700">{status}</p> : null}
        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white"
          >
            {editingId ? "Save changes" : "Create flyer"}
          </button>
          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium"
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-brand">All flyers</h2>
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-brand">
                  {item.title}
                </h3>
                {item.caption ? (
                  <p className="mt-2 text-sm text-slate-600">{item.caption}</p>
                ) : null}
                <p className="mt-2 text-xs text-slate-500">{item.image}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  item.published
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {item.published ? "Live" : "Draft"}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => startEdit(item)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600"
              >
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
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand focus:ring-2"
        required={type !== "number"}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  required = true,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand focus:ring-2"
        required={required}
      />
    </label>
  );
}
