"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { navigation, site, type NavItem } from "@/lib/site";
import { images } from "@/lib/images";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(item.href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [currentPath]);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src={images.logo}
            alt={`${site.name} logo`}
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-bold text-brand">Hopewell</span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              STEM Academy
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive(currentPath, item)
                    ? "text-brand"
                    : "text-slate-700 hover:text-brand"
                }`}
              >
                {item.label}
                {item.children && <FaChevronDown className="h-2.5 w-2.5 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <ul className="invisible absolute left-0 top-full w-60 origin-top translate-y-1 rounded-xl border border-brand-100 bg-white p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block rounded-lg border-l-2 px-3 py-2 text-sm transition-all ${
                          currentPath === child.href
                            ? "border-brand bg-brand-50 text-brand"
                            : "border-transparent text-slate-600 hover:border-brand hover:bg-brand-50 hover:pl-4 hover:text-brand"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <ul className="container-page space-y-1 py-3">
            {navigation.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 py-2.5 text-sm font-semibold uppercase tracking-wide ${
                      isActive(currentPath, item) ? "text-brand" : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenGroup((g) => (g === item.label ? null : item.label))
                      }
                      className="p-2 text-slate-500"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <FaChevronDown
                        className={`h-3 w-3 transition-transform ${
                          openGroup === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.label && (
                  <ul className="mb-2 ml-3 space-y-1 border-l border-brand-100 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-slate-600 hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
