import type { ThemeSlug } from "@/config/designs";
import type { DesignTheme } from "./types";

export const themes: Record<ThemeSlug, DesignTheme> = {
  bento: {
    slug: "bento",
    name: "Bento",
    eyebrow: "Modular interface",
    description:
      "A structured dashboard experience built around clear hierarchy, modular cards and purposeful spacing.",
    layout: "bento",
    classes: {
      page: "bg-[#f3f4f6] text-slate-950",
      decoration:
        "bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_35%)]",
      hero: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10",
      panel: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm",
      inset: "rounded-2xl bg-slate-100 p-4",
      badge:
        "rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700",
      heading: "font-bold tracking-[-0.04em] text-slate-950",
      body: "text-slate-700",
      muted: "text-slate-500",
      metricValue: "font-bold tracking-tight text-slate-950",

      primaryButton: "rounded-xl bg-slate-950 text-white hover:bg-slate-800",
      secondaryButton:
        "rounded-xl border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
      input:
        "rounded-xl border border-slate-300 bg-white text-slate-950 placeholder:text-slate-400",
      accent: "bg-blue-600",
    },
  },

  claymorphism: {
    slug: "claymorphism",
    name: "Claymorphism",
    eyebrow: "Playful interface",
    description:
      "A friendly visual language using soft shapes, bright colours and exaggerated dimensional surfaces.",

    layout: "standard",

    classes: {
      page: "bg-gradient-to-br from-[#ffd6ec] via-[#ddd6fe] to-[#bae6fd] text-violet-950",
      decoration:
        "bg-[radial-gradient(circle_at_15%_20%,_rgba(255,255,255,0.65),_transparent_28%)]",

      hero: "rounded-[3rem] border-4 border-white/50 bg-[#f3d4ff] p-6 shadow-[12px_12px_30px_rgba(91,33,182,0.2),inset_-6px_-6px_12px_rgba(91,33,182,0.12),inset_6px_6px_12px_rgba(255,255,255,0.65)] sm:p-10",
      panel:
        "rounded-[2.5rem] border-4 border-white/40 bg-[#c4e9ff] p-6 shadow-[10px_10px_24px_rgba(30,64,175,0.18),inset_-5px_-5px_10px_rgba(30,64,175,0.1),inset_5px_5px_10px_rgba(255,255,255,0.6)]",
      inset:
        "rounded-[2rem] bg-white/45 p-4 shadow-[inset_4px_4px_10px_rgba(91,33,182,0.12)]",

      badge:
        "rounded-full border-2 border-white/60 bg-pink-300 px-4 py-1 text-sm font-bold text-violet-950",
      heading: "font-black tracking-[-0.04em] text-violet-950",
      body: "font-medium text-violet-900",
      muted: "text-violet-700/70",
      metricValue: "font-black text-violet-950",

      primaryButton:
        "rounded-2xl border-2 border-white/60 bg-violet-500 text-white shadow-[5px_5px_0_rgba(76,29,149,0.3)] hover:-translate-y-0.5",
      secondaryButton:
        "rounded-2xl border-2 border-white/70 bg-white/50 text-violet-950 hover:bg-white/70",
      input:
        "rounded-2xl border-2 border-white/60 bg-white/50 text-violet-950 placeholder:text-violet-500",
      accent: "bg-violet-500",
    },
  },

  cyberpunk: {
    slug: "cyberpunk",
    name: "Cyberpunk",
    eyebrow: "System interface",
    description:
      "A futuristic command-centre experience built with neon accents, hard borders and high-contrast feedback.",

    layout: "standard",

    classes: {
      page: "bg-[#050505] bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:32px_32px] text-cyan-100",
      decoration:
        "bg-[radial-gradient(circle_at_top_right,_rgba(217,249,6,0.12),_transparent_30%)]",

      hero: "border border-cyan-400/70 bg-black/90 p-6 shadow-[8px_8px_0_#d9f906] sm:p-10",
      panel:
        "border border-fuchsia-500/60 bg-black/85 p-6 shadow-[6px_6px_0_rgba(34,211,238,0.65)]",
      inset: "border border-cyan-400/30 bg-cyan-400/5 p-4",

      badge:
        "border border-lime-300 bg-lime-300 px-3 py-1 font-mono text-sm font-bold uppercase text-black",
      heading:
        "font-mono font-black uppercase tracking-[-0.04em] text-lime-300",
      body: "font-mono text-cyan-100",
      muted: "font-mono text-cyan-300/60",
      metricValue: "font-mono font-black text-fuchsia-400",

      primaryButton:
        "border border-lime-300 bg-lime-300 font-mono uppercase text-black hover:bg-lime-200",
      secondaryButton:
        "border border-cyan-400 bg-transparent font-mono uppercase text-cyan-300 hover:bg-cyan-400/10",
      input:
        "border border-cyan-400/70 bg-black text-cyan-100 placeholder:text-cyan-700",
      accent: "bg-fuchsia-500 shadow-[0_0_14px_#d946ef]",
    },
  },

  glassmorphism: {
    slug: "glassmorphism",
    name: "Glassmorphism",
    eyebrow: "Layered interface",
    description:
      "A layered visual system combining transparent surfaces, background blur and soft luminous gradients.",

    layout: "standard",

    classes: {
      page: "bg-gradient-to-br from-indigo-950 via-violet-700 to-cyan-500 text-white",
      decoration:
        "bg-[radial-gradient(circle_at_20%_15%,_rgba(255,255,255,0.35),_transparent_28%)]",

      hero: "rounded-[2rem] border border-white/25 bg-white/15 p-6 shadow-2xl backdrop-blur-2xl sm:p-10",
      panel:
        "rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl",
      inset:
        "rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur-lg",

      badge:
        "rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm font-medium text-white backdrop-blur-lg",
      heading: "font-bold tracking-[-0.04em] text-white",
      body: "text-white/85",
      muted: "text-white/60",
      metricValue: "font-bold text-white",

      primaryButton: "rounded-xl bg-white text-indigo-950 hover:bg-white/90",
      secondaryButton:
        "rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur-lg hover:bg-white/20",
      input:
        "rounded-xl border border-white/25 bg-white/10 text-white placeholder:text-white/50 backdrop-blur-lg",
      accent: "bg-cyan-300",
    },
  },

  "liquid-glass": {
    slug: "liquid-glass",
    name: "Liquid Glass",
    eyebrow: "Fluid interface",
    description:
      "An immersive glass experience with fluid shapes, luminous surfaces and smooth visual depth.",

    layout: "standard",

    classes: {
      page: "bg-[radial-gradient(circle_at_top_left,_#2563eb,_#172554_42%,_#020617_80%)] text-white",
      decoration:
        "bg-[radial-gradient(ellipse_at_75%_20%,_rgba(103,232,249,0.35),_transparent_30%)]",

      hero: "rounded-[3.5rem] border border-cyan-100/30 bg-gradient-to-br from-white/25 to-white/5 p-6 shadow-[0_30px_100px_rgba(6,182,212,0.25)] backdrop-blur-3xl sm:p-10",
      panel:
        "rounded-[2.75rem] border border-white/20 bg-gradient-to-br from-cyan-200/20 to-blue-500/5 p-6 shadow-2xl backdrop-blur-2xl",
      inset:
        "rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl",

      badge:
        "rounded-full border border-cyan-100/40 bg-cyan-100/15 px-4 py-1 text-sm font-medium text-cyan-50 backdrop-blur-xl",
      heading: "font-semibold tracking-[-0.05em] text-white",
      body: "text-blue-50/90",
      muted: "text-cyan-100/60",
      metricValue: "font-semibold text-cyan-100",

      primaryButton:
        "rounded-full bg-white text-blue-950 shadow-lg hover:scale-[1.02]",
      secondaryButton:
        "rounded-full border border-cyan-100/30 bg-cyan-100/10 text-white backdrop-blur-xl hover:bg-cyan-100/20",
      input:
        "rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/45 backdrop-blur-xl",
      accent:
        "bg-gradient-to-t from-cyan-300 to-white shadow-[0_0_18px_rgba(103,232,249,0.65)]",
    },
  },

  minimal: {
    slug: "minimal",
    name: "Minimal",
    eyebrow: "Content-first interface",
    description:
      "A restrained design language where typography, whitespace and clarity do most of the work.",

    layout: "standard",

    classes: {
      page: "bg-white text-neutral-950",
      decoration: "",

      hero: "border-b border-neutral-200 p-6 sm:p-10",
      panel: "border border-neutral-200 bg-white p-6",
      inset: "border-l-2 border-neutral-950 bg-neutral-50 p-4",

      badge:
        "border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-700",
      heading: "font-medium tracking-[-0.04em] text-neutral-950",
      body: "text-neutral-700",
      muted: "text-neutral-500",
      metricValue: "font-medium text-neutral-950",

      primaryButton: "bg-neutral-950 text-white hover:bg-neutral-800",
      secondaryButton:
        "border border-neutral-300 bg-white text-neutral-950 hover:bg-neutral-50",
      input:
        "border border-neutral-300 bg-white text-neutral-950 placeholder:text-neutral-400",
      accent: "bg-neutral-950",
    },
  },

  neumorphism: {
    slug: "neumorphism",
    name: "Neumorphism",
    eyebrow: "Soft interface",
    description:
      "A tactile interface that uses carefully balanced highlights and shadows to create raised and pressed surfaces.",

    layout: "standard",

    classes: {
      page: "bg-[#e4e9f0] text-slate-700",
      decoration: "",

      hero: "rounded-[2rem] bg-[#e4e9f0] p-6 shadow-[14px_14px_28px_#c2c6cc,-14px_-14px_28px_#ffffff] sm:p-10",
      panel:
        "rounded-[2rem] bg-[#e4e9f0] p-6 shadow-[10px_10px_20px_#c2c6cc,-10px_-10px_20px_#ffffff]",
      inset:
        "rounded-2xl bg-[#e4e9f0] p-4 shadow-[inset_6px_6px_12px_#c2c6cc,inset_-6px_-6px_12px_#ffffff]",
      badge:
        "rounded-full bg-[#e4e9f0] px-3 py-1 text-sm font-semibold text-blue-600 shadow-[4px_4px_8px_#c2c6cc,-4px_-4px_8px_#ffffff]",
      heading: "font-bold tracking-[-0.04em] text-slate-700",
      body: "text-slate-600",
      muted: "text-slate-500",
      metricValue: "font-bold text-blue-600",

      primaryButton:
        "rounded-xl bg-[#e4e9f0] text-blue-600 shadow-[6px_6px_12px_#c2c6cc,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c2c6cc,inset_-4px_-4px_8px_#ffffff]",
      secondaryButton:
        "rounded-xl bg-[#e4e9f0] text-slate-600 shadow-[4px_4px_8px_#c2c6cc,-4px_-4px_8px_#ffffff]",
      input:
        "rounded-xl border-0 bg-[#e4e9f0] text-slate-700 placeholder:text-slate-400 shadow-[inset_5px_5px_10px_#c2c6cc,inset_-5px_-5px_10px_#ffffff]",
      accent: "bg-blue-500",
    },
  },
};
