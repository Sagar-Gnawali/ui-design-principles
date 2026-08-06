"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  Home,
  FolderOpen,
  User,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  Circle,
  Sparkles,
  Droplets,
  Monitor,
  Palette,
  Moon,
} from "lucide-react";

const designPages = [
  {
    name: "Bento",
    href: "/designs/bento",
    icon: LayoutGrid,
  },
  {
    name: "Claymorphism",
    href: "/designs/claymorphism",
    icon: Circle,
  },
  {
    name: "Cyberpunk",
    href: "/designs/cyberpunk",
    icon: Sparkles,
  },
  {
    name: "Glassmorphism",
    href: "/designs/glassmorphism",
    icon: Monitor,
  },
  {
    name: "Liquid Glass",
    href: "/designs/liquid-glass",
    icon: Droplets,
  },
  {
    name: "Minimal",
    href: "/designs/minimal",
    icon: Palette,
  },
  {
    name: "Neumorphism",
    href: "/designs/neumorphism",
    icon: Circle,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (pathname.startsWith("/designs")) {
      //   setOpen(true);
    }
  }, [pathname]);

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-[#0f172a] text-slate-200">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold">DesignHub</h1>

        <p className="mt-1 text-sm text-slate-400">UI Showcase</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-5">
        <Link
          href="/dashboard"
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all

          ${
            pathname === "/dashboard"
              ? "bg-blue-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          <Home size={20} />
          Dashboard
        </Link>

        <Link
          href="/about"
          className={`mb-6 flex items-center gap-3 rounded-xl px-4 py-3 transition-all

          ${
            pathname === "/about"
              ? "bg-blue-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          <User size={20} />
          About
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-800"
        >
          <div className="flex items-center gap-3">
            <FolderOpen size={20} />
            Designs
          </div>

          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        {open && (
          <div className="relative ml-4 mt-4 border-l border-slate-700 pl-6">
            {designPages.map((item) => {
              const Icon = item.icon;

              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mb-2 flex items-center gap-3 rounded-xl px-3 py-3 transition-all

                  ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "hover:bg-slate-800"
                  }`}
                >
                  <Icon size={18} />

                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-800">
          <div className="flex items-center gap-3">
            <Moon size={20} />
            Theme
          </div>
          <ChevronRight size={18} />
        </button>
      </div>
    </aside>
  );
}
