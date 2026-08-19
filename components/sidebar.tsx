"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  FolderOpen,
  LoaderCircle,
  Moon,
  Plus,
  RefreshCw,
  User,
} from "lucide-react";

import { getAvailableDesignPages } from "@/config/designs";
import { useSideBarTheme } from "@/app/services/theme.queries";
import { Skeleton } from "./skeleton";

function SidebarDesignSkeleton() {
  return (
    <div className="space-y-1" aria-label="Loading designs" aria-busy="true">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse items-center gap-3 rounded-xl px-3 py-3"
        >
          <Skeleton className="shrink-0 rounded-md" />
          <Skeleton
            className={`h-4 rounded-md ${
              index === 0 ? "w-20" : index === 1 ? "w-28" : "w-24"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  const [designsOpen, setDesignsOpen] = useState(
    pathname.startsWith("/designs"),
  );

  const { data, isPending, isError, isFetching, refetch } = useSideBarTheme();

  const availableDesignPages = data ? getAvailableDesignPages(data) : [];

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

        <Link
          href="/designs/new"
          className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
            pathname === "/designs/new"
              ? "bg-blue-600 text-white"
              : "text-blue-400 hover:bg-slate-800 hover:text-blue-300"
          }`}
        >
          <Plus size={18} />
          <span>Create Theme</span>
        </Link>

        <button
          type="button"
          aria-expanded={designsOpen}
          aria-controls="design-navigation"
          onClick={() => setDesignsOpen((current) => !current)}
          className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition ${
            pathname.startsWith("/designs")
              ? "text-blue-400"
              : "hover:bg-slate-800"
          }`}
        >
          <span className="flex items-center gap-3">
            <FolderOpen size={20} aria-hidden="true" />
            <span>Designs</span>
          </span>

          <span className="flex items-center gap-2">
            {isFetching && !isPending && (
              <LoaderCircle
                size={15}
                className="animate-spin text-blue-400"
                aria-hidden="true"
              />
            )}

            {designsOpen ? (
              <ChevronDown size={18} aria-hidden="true" />
            ) : (
              <ChevronRight size={18} aria-hidden="true" />
            )}
          </span>
        </button>

        {designsOpen && (
          <div
            id="design-navigation"
            className="relative ml-4 mt-3 border-l border-slate-700 pl-5"
          >
            {isPending && <SidebarDesignSkeleton />}

            {isError && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
                <p className="text-xs text-red-300">Could not load designs.</p>

                <button
                  type="button"
                  onClick={() => refetch()}
                  className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-300 transition hover:text-red-200"
                >
                  <RefreshCw size={13} />
                  Retry
                </button>
              </div>
            )}

            {!isPending &&
              !isError &&
              availableDesignPages.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

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
