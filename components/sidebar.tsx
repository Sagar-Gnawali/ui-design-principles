"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Moon,
  User,
} from "lucide-react";

import { DESIGN_PAGES } from "@/config/designs";

export default function Sidebar() {
  const pathname = usePathname();

  const [designsOpen, setDesignsOpen] = useState(
    pathname.startsWith("/designs"),
  );

  useEffect(() => {
    if (pathname.startsWith("/designs")) {
      // setDesignsOpen(true);
    }
  }, [pathname]);

  return (
    <aside className="sticky top-0 flex h-dvh w-72 shrink-0 flex-col border-r border-slate-800 bg-[#0f172a] text-slate-200">
      <div className="border-b border-slate-800 p-6">
        <Link href="/" className="block">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            DesignHub
          </h1>

          <p className="mt-1 text-sm text-slate-400">UI Showcase</p>
        </Link>
      </div>

      <nav aria-label="Main navigation" className="flex-1 overflow-y-auto p-5">
        <Link
          href="/about"
          className={`mb-5 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
            pathname === "/about"
              ? "bg-blue-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          <User size={20} aria-hidden="true" />
          <span>About</span>
        </Link>

        <button
          type="button"
          aria-expanded={designsOpen}
          aria-controls="design-navigation"
          onClick={() => setDesignsOpen((current) => !current)}
          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition cursor-pointer ${
            pathname.startsWith("/designs")
              ? "text-blue-400"
              : "hover:bg-slate-800"
          }`}
        >
          <span className="flex items-center gap-3 ">
            <FolderOpen size={20} aria-hidden="true" />
            <span>Designs</span>
          </span>

          {designsOpen ? (
            <ChevronDown size={18} aria-hidden="true" />
          ) : (
            <ChevronRight size={18} aria-hidden="true" />
          )}
        </button>

        {designsOpen && (
          <div
            id="design-navigation"
            className="relative ml-4 mt-3 border-l border-slate-700 pl-5"
          >
            {DESIGN_PAGES.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* future impl: when hovering apperance shoud allow user to set different design */}
      <div className="border-t border-slate-800 p-5">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-800"
        >
          <span className="flex items-center cursor-pointer gap-3">
            <Moon size={20} aria-hidden="true" />
            <span>Appearance</span>
          </span>
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
