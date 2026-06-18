"use client";

import { useEffect, useState } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  dateLabel: string;
  published: boolean;
  sortOrder: number;
};

const emptyForm = {
  title: "",
  excerpt: "",
  image: "/images/discover-transport.jpg",
  dateLabel: "",
  published: true,
  sortOrder: 0,
};

export default function AdminNewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  async function loadItems() {
    const response = await fetch("/api/admin/news");
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
      editingId ? `/api/admin/news/${editingId}` : "/api/admin/news",
      {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      setStatus("Could not save news item.");
      return;
    }

    setStatus(editingId ? "News item updated." : "News item created.");
    resetForm();
    await loadItems();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this news item?")) return;
    await fetch(`/api/admin/news/${id}`, { method: "DELETE" });
    await loadItems();
  }

  function startEdit(item: NewsItem) {
    setEditingId(item.id);
    setForm({
      title: item.title,
      excerpt: item.excerpt,
      image: item.image,
      dateLabel: item.dateLabel,
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
          {editingId ? "Edit news item" : "Add news item"}
        </h2>
        <div className="mt-4 space-y-4">
          <Field label="Title" value={form.title} onChange={(value) => setForm({ ...form, title: value })} />
          <Field label="Date label" value={form.dateLabel} onChange={(value) => setForm({ ...form, dateLabel: value })} placeholder="January 5, 2025" />
          <TextArea label="Excerpt" value={form.excerpt} onChange={(value) => setForm({ ...form, excerpt: value })} />
          <ImageUpload
            label="News image"
            value={form.image}
            onChange={(value) => setForm({ ...form, image: value })}
          />
          <Field label="Sort order" type="number" value={String(form.sortOrder)} onChange={(value) => setForm({ ...form, sortOrder: Number(value) })} />
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
            {editingId ? "Save changes" : "Create item"}
          </button>
          {editingId ? (
            <button type="button" onClick={resetForm} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-brand">All news</h2>
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-accent">{item.dateLabel}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
                <p className="mt-2 text-xs text-slate-500">{item.image}</p>
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
        required={type !== "number"}
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
