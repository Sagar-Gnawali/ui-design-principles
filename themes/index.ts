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
    // description/significance
    designProfile: {
      about:
        "Bento design organises information into modular cards of different sizes. Each card represents a focused task, metric, feature, or content group, allowing users to scan a large amount of information without facing one continuous page.",
      suitedFor: [
        "Analytics dashboards",
        "SaaS product homepages",
        "Project management tools",
        "Admin platforms",
        "Productivity applications",
      ],
      bestChoiceWhen:
        "Choose Bento when the interface contains several independent pieces of information that must remain visible, scannable, and easy to prioritise.",
      designPerspective:
        "From a UI and UX perspective, Bento works well because it creates hierarchy through card size, position, spacing, and contrast. Larger cards communicate greater importance, while smaller cards support secondary actions and contextual information.",
      useCases: [
        "A revenue dashboard showing sales, conversion, customers, and recent activity",
        "A project workspace containing tasks, deadlines, team activity, and progress",
        "A cloud platform overview displaying service health and resource usage",
        "A personal productivity dashboard combining notes, calendar, and goals",
      ],
      interactionModel:
        "Interactions should remain contained within each card. Cards may expand, reveal more detail, support filtering, or provide a clear primary action. Avoid making every card highly interactive, as this can reduce hierarchy and increase cognitive load.",
      implementationNotes:
        "Use CSS Grid for the main layout and define predictable column spans for important cards. Components should remain reusable, responsive, and content-aware. On smaller screens, the grid should collapse into a clear single-column sequence.",
      effort: {
        level: "Medium",
        explanation:
          "The visual styling is straightforward, but creating a balanced grid, responsive card spans, and meaningful hierarchy requires thoughtful layout planning.",
      },
      considerations: [
        "Do not use card size only for decoration; size should communicate importance",
        "Avoid excessive nesting of cards inside cards",
        "Maintain a logical mobile reading order",
        "Keep spacing and alignment consistent across modules",
      ],
      palette: [
        {
          name: "Canvas",
          value: "#F3F4F6",
          role: "Main application background",
        },
        {
          name: "Surface",
          value: "#FFFFFF",
          role: "Cards, panels and elevated content",
        },
        {
          name: "Primary text",
          value: "#020617",
          role: "Headings, important values and primary actions",
        },
        {
          name: "Accent blue",
          value: "#2563EB",
          role: "Navigation, active states and highlighted actions",
        },
        {
          name: "Muted text",
          value: "#64748B",
          role: "Supporting copy and secondary information",
        },
        {
          name: "Border",
          value: "#E2E8F0",
          role: "Card boundaries and visual grouping",
        },
      ],
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
    // description/significance
    designProfile: {
      about:
        "Claymorphism uses rounded forms, soft inner shadows, bright colours, and exaggerated depth to create a tactile and playful interface. Components often appear inflated, soft, or physically shaped.",

      suitedFor: [
        "Educational products",
        "Children-focused applications",
        "Creative tools",
        "Onboarding experiences",
        "Friendly consumer products",
      ],

      bestChoiceWhen:
        "Choose Claymorphism when the product should feel approachable, expressive, playful, and emotionally warm rather than formal or highly technical.",

      designPerspective:
        "Claymorphism can create a strong emotional identity and make interfaces feel less intimidating. However, it should support the product’s personality rather than being applied to every element purely for visual effect.",

      useCases: [
        "A language-learning application with interactive lesson cards",
        "A children’s learning dashboard",
        "A creative portfolio or illustration tool",
        "A wellness application using friendly progress components",
      ],

      interactionModel:
        "Buttons and controls should feel tactile, with subtle compression, elevation, or bounce feedback. Animations should be short and purposeful so that the interface feels responsive rather than slow or overly playful.",

      implementationNotes:
        "Clay surfaces usually require layered box shadows, rounded geometry, controlled colour palettes, and careful component spacing. Reusable shadow and radius tokens are important because inconsistent depth quickly makes the UI feel visually unbalanced.",

      effort: {
        level: "Medium",
        explanation:
          "Basic Claymorphism is easy to produce, but maintaining consistent lighting, depth, contrast, and component states across a full application requires design discipline.",
      },

      considerations: [
        "Soft colours can create insufficient text contrast",
        "Large shadows may reduce visual clarity on smaller screens",
        "Avoid applying heavy clay effects to dense data tables",
        "Use motion carefully to prevent the interface feeling childish",
      ],
      palette: [
        {
          name: "Pink canvas",
          value: "#FFD6EC",
          role: "Warm background gradient",
        },
        {
          name: "Lavender canvas",
          value: "#DDD6FE",
          role: "Middle gradient colour",
        },
        {
          name: "Blue canvas",
          value: "#BAE6FD",
          role: "Cool background gradient",
        },
        {
          name: "Clay surface",
          value: "#F3D4FF",
          role: "Primary raised surfaces",
        },
        {
          name: "Secondary surface",
          value: "#C4E9FF",
          role: "Supporting cards and content areas",
        },
        {
          name: "Action violet",
          value: "#8B5CF6",
          role: "Primary buttons and interactive elements",
        },
        {
          name: "Deep text",
          value: "#2E1065",
          role: "Headings and important content",
        },
      ],
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
    // description/significance
    designProfile: {
      about:
        "Cyberpunk design combines dark surfaces, neon colour accents, technical typography, sharp borders, grid patterns, and system-inspired visual language to create a futuristic and high-energy interface.",

      suitedFor: [
        "Gaming platforms",
        "Developer tools",
        "AI experimentation interfaces",
        "Music and entertainment products",
        "Science-fiction experiences",
      ],

      bestChoiceWhen:
        "Choose Cyberpunk when the product intentionally needs a futuristic, experimental, technical, or entertainment-focused identity.",

      designPerspective:
        "Cyberpunk creates immediate visual impact and a strong brand personality. It is most effective when used as a controlled design language rather than as constant visual noise. Information hierarchy must remain stronger than decorative effects.",

      useCases: [
        "A gaming launcher showing players, achievements, and live events",
        "An AI model monitoring console",
        "A music visualisation dashboard",
        "A fictional command-centre interface",
      ],

      interactionModel:
        "Interactions may use scanning lines, short glow transitions, status pulses, terminal-style feedback, and sharp state changes. Critical actions should remain predictable and should not depend only on animation or neon colour.",

      implementationNotes:
        "Build the design from a limited set of neon accent tokens, dark surface levels, monospaced typography, border patterns, and glow utilities. Use pseudo-elements or background gradients for decoration rather than adding unnecessary DOM elements.",

      effort: {
        level: "High",
        explanation:
          "A refined Cyberpunk interface requires careful control of contrast, glow, animation, typography, performance, and responsive behaviour. Poorly controlled effects can quickly make the UI difficult to use.",
      },

      considerations: [
        "Excessive glow can reduce readability",
        "Bright colours should not be the only indication of state",
        "Continuous animations may affect performance and accessibility",
        "Avoid using the style for formal or trust-sensitive services",
      ],
      palette: [
        {
          name: "System background",
          value: "#050505",
          role: "Main interface canvas",
        },
        {
          name: "Panel black",
          value: "#000000",
          role: "Command panels and elevated surfaces",
        },
        {
          name: "Neon lime",
          value: "#BEF264",
          role: "Primary actions, headings and status indicators",
        },
        {
          name: "Electric cyan",
          value: "#22D3EE",
          role: "Borders, focus states and system information",
        },
        {
          name: "Signal magenta",
          value: "#D946EF",
          role: "Data emphasis, alerts and secondary accents",
        },
        {
          name: "Interface text",
          value: "#CFFAFE",
          role: "Primary readable content",
        },
        {
          name: "Neon glow",
          value: "#D9F906",
          role: "Decorative shadows and high-energy highlights",
        },
      ],
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
    // description/significance
    designProfile: {
      about:
        "Glassmorphism creates visual depth using translucent surfaces, background blur, subtle borders, soft shadows, and layered colour. Elements appear to float above a colourful or photographic background.",

      suitedFor: [
        "AI product interfaces",
        "Creative portfolios",
        "Premium landing pages",
        "Media applications",
        "Modern dashboard experiences",
      ],

      bestChoiceWhen:
        "Choose Glassmorphism when the product benefits from visual depth, atmosphere, and premium presentation while maintaining a relatively simple content structure.",

      designPerspective:
        "Glassmorphism is effective when transparency communicates hierarchy between layers. The background, glass surface, and foreground content must remain visually distinct. It should not reduce readability for the sake of visual style.",

      useCases: [
        "An AI assistant dashboard with floating tool panels",
        "A music player displayed over album artwork",
        "A travel application using destination photography",
        "A portfolio with layered project cards",
      ],

      interactionModel:
        "Interactive surfaces can become slightly brighter, more opaque, or more elevated during hover and focus. Changes should remain subtle because strong movement can weaken the calm, layered experience.",

      implementationNotes:
        "Use backdrop blur, semi-transparent backgrounds, subtle white borders, and controlled gradients. Always provide a fallback surface colour because backdrop filters may render differently across browsers and devices.",

      effort: {
        level: "Medium",
        explanation:
          "The core effect is simple, but achieving consistent contrast, browser support, responsive performance, and readable content requires careful testing.",
      },

      considerations: [
        "Transparent panels may fail contrast requirements",
        "Large backdrop filters can affect rendering performance",
        "Busy backgrounds can make text difficult to read",
        "Avoid stacking too many transparent surfaces",
      ],
      palette: [
        {
          name: "Indigo base",
          value: "#1E1B4B",
          role: "Dark gradient foundation",
        },
        {
          name: "Violet layer",
          value: "#6D28D9",
          role: "Primary gradient colour",
        },
        {
          name: "Cyan layer",
          value: "#06B6D4",
          role: "Bright atmospheric accent",
        },
        {
          name: "Glass surface",
          value: "rgba(255, 255, 255, 0.15)",
          role: "Translucent cards and panels",
        },
        {
          name: "Glass border",
          value: "rgba(255, 255, 255, 0.25)",
          role: "Surface boundaries and reflected light",
        },
        {
          name: "Primary text",
          value: "#FFFFFF",
          role: "Headings and important content",
        },
        {
          name: "Muted glass text",
          value: "rgba(255, 255, 255, 0.60)",
          role: "Supporting information",
        },
      ],
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
    designProfile: {
      about:
        "Liquid Glass extends traditional glass-based design with fluid shapes, luminous colour, soft distortion, layered reflections, and motion that suggests a flexible or responsive material.",

      suitedFor: [
        "Premium digital products",
        "Immersive landing pages",
        "Creative software",
        "AI interfaces",
        "Experimental product experiences",
      ],

      bestChoiceWhen:
        "Choose Liquid Glass when emotional impact, movement, and premium presentation are central to the product experience and the interface contains relatively focused content.",

      designPerspective:
        "From a design perspective, Liquid Glass can make an interface feel advanced and highly crafted. Its value comes from controlled depth and motion, not from placing blur and distortion on every component.",

      useCases: [
        "A premium AI workspace with floating contextual controls",
        "An immersive product launch page",
        "A creative editing application",
        "A media experience with fluid navigation surfaces",
      ],

      interactionModel:
        "Surfaces may gently shift, stretch, glow, or respond to pointer movement. Motion should reinforce spatial relationships and interaction feedback rather than functioning as decoration alone.",

      implementationNotes:
        "Implementation may involve layered gradients, backdrop filters, masks, pseudo-elements, transforms, and controlled motion. Use GPU-friendly properties such as transform and opacity, and provide reduced-motion alternatives.",

      effort: {
        level: "High",
        explanation:
          "Liquid Glass requires advanced visual layering, animation refinement, performance testing, accessibility fallbacks, and careful behaviour across screen sizes.",
      },

      considerations: [
        "Complex effects may perform poorly on lower-powered devices",
        "Motion must respect reduced-motion preferences",
        "Distortion should never interfere with text legibility",
        "Use the style selectively around high-value interface areas",
      ],
      palette: [
        {
          name: "Electric blue",
          value: "#2563EB",
          role: "Bright gradient origin and interactive energy",
        },
        {
          name: "Deep blue",
          value: "#172554",
          role: "Mid-depth background layer",
        },
        {
          name: "Night surface",
          value: "#020617",
          role: "Deep background and contrast foundation",
        },
        {
          name: "Liquid surface",
          value: "rgba(255, 255, 255, 0.10)",
          role: "Fluid glass panels",
        },
        {
          name: "Liquid highlight",
          value: "rgba(255, 255, 255, 0.25)",
          role: "Reflections and surface lighting",
        },
        {
          name: "Luminous cyan",
          value: "#67E8F9",
          role: "Accents, charts and active elements",
        },
        {
          name: "Primary text",
          value: "#FFFFFF",
          role: "Readable foreground content",
        },
      ],
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
    designProfile: {
      about:
        "Minimal design reduces the interface to essential content, typography, spacing, and actions. It avoids unnecessary decoration and allows hierarchy, wording, and layout to guide the user.",

      suitedFor: [
        "Documentation platforms",
        "Editorial websites",
        "Professional portfolios",
        "Enterprise products",
        "Content-focused applications",
      ],

      bestChoiceWhen:
        "Choose Minimal design when clarity, trust, speed, accessibility, and content comprehension are more important than visual spectacle.",

      designPerspective:
        "Minimal design is not the absence of design. It requires precise typography, spacing, hierarchy, alignment, and content decisions. Because there are fewer decorative elements, small inconsistencies become more visible.",

      useCases: [
        "A technical documentation platform",
        "A professional consultancy website",
        "A writing or note-taking application",
        "A focused checkout or account-management flow",
      ],

      interactionModel:
        "Interactions should be direct, predictable, and quiet. Focus, hover, loading, success, and error states must still be clearly communicated even when the visual treatment remains restrained.",

      implementationNotes:
        "Use a disciplined spacing scale, strong typography tokens, semantic HTML, clear focus states, and a small colour system. Components should avoid unnecessary wrappers, decorative shadows, and complex visual effects.",

      effort: {
        level: "Low",
        explanation:
          "The technical styling effort is relatively low, but achieving a refined result requires strong judgement in typography, spacing, content structure, and visual hierarchy.",
      },

      considerations: [
        "Minimal does not mean removing useful context",
        "Very subtle states can be difficult to recognise",
        "Typography quality becomes especially important",
        "Do not sacrifice discoverability to preserve visual simplicity",
      ],
      palette: [
        {
          name: "Canvas",
          value: "#FFFFFF",
          role: "Primary application background",
        },
        {
          name: "Subtle surface",
          value: "#FAFAFA",
          role: "Secondary content regions",
        },
        {
          name: "Primary text",
          value: "#0A0A0A",
          role: "Headings, buttons and important information",
        },
        {
          name: "Body text",
          value: "#404040",
          role: "Long-form copy and supporting content",
        },
        {
          name: "Muted text",
          value: "#737373",
          role: "Metadata and secondary information",
        },
        {
          name: "Border",
          value: "#D4D4D4",
          role: "Dividers, inputs and structural boundaries",
        },
      ],
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
    designProfile: {
      about:
        "Neumorphism creates tactile-looking interfaces by using matching background colours with paired light and dark shadows. Components appear raised from or pressed into the surrounding surface.",

      suitedFor: [
        "Media controls",
        "Small productivity tools",
        "Device-control interfaces",
        "Focused dashboards",
        "Interactive concept projects",
      ],

      bestChoiceWhen:
        "Choose Neumorphism for focused interfaces with a limited number of controls where tactile appearance is more important than displaying dense information.",

      designPerspective:
        "Neumorphism can create a calm and distinctive interface, but its low-contrast surfaces often create usability challenges. It works best as a selective component treatment rather than a complete solution for every screen.",

      useCases: [
        "A music player with playback controls",
        "A smart-home control panel",
        "A calculator interface",
        "A focused timer or habit tracker",
      ],

      interactionModel:
        "Raised elements should appear pressed when activated. Users need clear hover, focus, selected, disabled, and active states because subtle shadow changes alone may not communicate state reliably.",

      implementationNotes:
        "Use a consistent surface colour and generate light and dark shadow tokens from the same visual system. Combine shadow changes with borders, icons, labels, or colour changes to maintain accessibility.",

      effort: {
        level: "Medium",
        explanation:
          "The visual effect is technically simple, but accessible interaction states, consistent lighting, dark-mode support, and readable controls require additional refinement.",
      },

      considerations: [
        "Low contrast can create serious accessibility issues",
        "Pressed and inactive states may look too similar",
        "The style is not well suited to dense tables or complex forms",
        "Always provide visible keyboard focus indicators",
      ],
      palette: [
        {
          name: "Base surface",
          value: "#E4E9F0",
          role: "Shared page and component surface",
        },
        {
          name: "Dark shadow",
          value: "#C2C6CC",
          role: "Creates the lower, recessed edge",
        },
        {
          name: "Light shadow",
          value: "#FFFFFF",
          role: "Creates the raised highlight edge",
        },
        {
          name: "Interaction blue",
          value: "#2563EB",
          role: "Active controls and selected states",
        },
        {
          name: "Primary text",
          value: "#334155",
          role: "Headings and readable foreground content",
        },
        {
          name: "Muted text",
          value: "#64748B",
          role: "Descriptions and secondary information",
        },
      ],
    },
  },
};
