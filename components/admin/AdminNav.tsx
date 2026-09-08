"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/news", label: "News" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/popups", label: "Pop-ups" },
  { href: "/admin/flyers", label: "Flyers" },
  { href: "/admin/inquiries", label: "Inquiries" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminNav() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Hopewell CMS
          </p>
          <h1 className="font-display text-xl font-bold text-brand">
            Content Manager
          </h1>
        </div>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => {
            const active =
              link.href === "/admin"
                ? currentPath === "/admin"
                : currentPath.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-brand text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            View site
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Sign out
          </button>
        </nav>
      </div>
    </header>
  );
}
