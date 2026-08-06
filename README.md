# DesignHub

A frontend playground for exploring modern UI design languages through one reusable, theme-driven Next.js application.

DesignHub is built around a simple idea: **the structure of an interface should stay reusable, while its visual language can change completely**.

Instead of maintaining separate pages and duplicated components for every design style, the project uses a dynamic theme loader. The same cards, buttons, navigation, forms, and dashboard sections can transform into Bento, Glassmorphism, Neumorphism, Cyberpunk, Minimal, and other visual systems based on the current route.

---

## Why this project?

Most UI showcase projects focus only on appearance. They often create a separate page, component set, and styling approach for every design trend.

That works for a small demo, but it becomes difficult to maintain as the project grows.

DesignHub takes a more production-minded approach:

- one reusable component architecture;
- one dynamic route for all design themes;
- strongly typed theme definitions;
- reusable design tokens;
- consistent responsive behaviour;
- clear separation between layout, content, and visual styling.

The result is both a visual showcase and a practical example of scalable frontend architecture.

---

## Preview

```text
Dashboard
About

Designs
├── Bento
├── Claymorphism
├── Cyberpunk
├── Glassmorphism
├── Liquid Glass
├── Minimal
└── Neumorphism
```

Each design can be opened from the sidebar:

```text
/designs/bento
/designs/claymorphism
/designs/cyberpunk
/designs/glassmorphism
/designs/liquid-glass
/designs/minimal
/designs/neumorphism
```

## Features

- Dynamic theme loading based on the URL
- Collapsible sidebar navigation
- Active route highlighting
- Reusable UI components
- Type-safe theme configuration
- Design-token-based styling
- Responsive dashboard layout
- Scalable Next.js App Router structure
- Easy support for additional design languages
- Clear separation between visual styling and component behaviour

---

## Design styles

### Bento

A structured, card-based layout inspired by modern productivity tools and dashboard interfaces.

**Best suited for:**

- analytics dashboards;
- SaaS products;
- admin panels;
- productivity applications.

### Claymorphism

A playful visual language built around soft shapes, depth, rounded surfaces, and expressive colour.

**Best suited for:**

- education products;
- creative applications;
- onboarding experiences;
- friendly consumer interfaces.

### Cyberpunk

A futuristic dark interface with neon accents, sharp contrast, glow effects, and energetic visual feedback.

**Best suited for:**

- gaming platforms;
- AI tools;
- developer products;
- experimental interfaces.

### Glassmorphism

A layered interface style that uses transparency, blur, gradients, and subtle borders to create depth.

**Best suited for:**

- AI applications;
- portfolios;
- landing pages;
- modern dashboards.

### Liquid Glass

A more fluid interpretation of glass-based UI, using luminous surfaces, soft movement, depth, and flowing gradients.

**Best suited for:**

- immersive product experiences;
- premium interfaces;
- creative tools;
- experimental dashboards.

### Minimal

A content-first design style focused on spacing, typography, clarity, and restrained interaction.

**Best suited for:**

- documentation;
- blogs;
- business products;
- editorial layouts.

### Neumorphism

A soft interface style that creates raised and pressed surfaces using carefully balanced light and shadow.

**Best suited for:**

- control panels;
- media players;
- focused productivity tools;
- small interactive widgets.

---

## Technology

- **Next.js** — routing, layouts, and application structure
- **React** — component-based UI development
- **TypeScript** — type safety and maintainable theme contracts
- **Tailwind CSS** — utility-first styling
- **Lucide React** — interface icons
- **Next.js App Router** — dynamic routing and nested layouts

---

## Project structure

```text
app/
├── about/
│   └── page.tsx
├── dashboard/
│   └── page.tsx
├── designs/
│   ├── page.tsx
│   └── [theme]/
│       └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── layout/
│   ├── Header.tsx
│   └── Sidebar.tsx
├── ui/
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── StatCard.tsx
└── design-preview/
    └── DesignPreview.tsx

config/
└── navigation.ts

themes/
├── bento.ts
├── claymorphism.ts
├── cyberpunk.ts
├── glassmorphism.ts
├── index.ts
├── liquid-glass.ts
├── minimal.ts
├── neumorphism.ts
└── types.ts

public/
└── images/
```

You can adjust the structure as the application grows, but keeping navigation, reusable components, and theme definitions separate will make the codebase easier to understand.

---

## Getting started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd designhub
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

Using Yarn:

```bash
yarn
```

### 3. Install the icon package

```bash
npm install lucide-react
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Checks the project for linting issues.

---

## How the dynamic theme system works

All design pages are handled by one dynamic route:

```text
app/designs/[theme]/page.tsx
```

The route parameter identifies which design theme should be loaded.

For example:

```text
/designs/bento
```

loads the Bento theme, while:

```text
/designs/cyberpunk
```

loads the Cyberpunk theme.

A theme registry maps each route name to its corresponding configuration:

```ts
import { bentoTheme } from "./bento";
import { claymorphismTheme } from "./claymorphism";
import { cyberpunkTheme } from "./cyberpunk";
import { glassmorphismTheme } from "./glassmorphism";
import { liquidGlassTheme } from "./liquid-glass";
import { minimalTheme } from "./minimal";
import { neumorphismTheme } from "./neumorphism";

export const themes = {
  bento: bentoTheme,
  claymorphism: claymorphismTheme,
  cyberpunk: cyberpunkTheme,
  glassmorphism: glassmorphismTheme,
  "liquid-glass": liquidGlassTheme,
  minimal: minimalTheme,
  neumorphism: neumorphismTheme,
} as const;

export type ThemeName = keyof typeof themes;

export function getTheme(name: string) {
  return themes[name as ThemeName] ?? themes.bento;
}
```

This makes the theme loader predictable, easy to extend, and safe to use with TypeScript.

---

## Theme contract

Every design theme should follow the same structure.

```ts
export interface DesignTheme {
  name: string;
  description: string;

  classes: {
    page: string;
    surface: string;
    card: string;
    heading: string;
    text: string;
    mutedText: string;
    button: string;
    input: string;
    badge: string;
  };
}
```

A simple Bento theme could look like this:

```ts
import type { DesignTheme } from "./types";

export const bentoTheme: DesignTheme = {
  name: "Bento",
  description: "A structured card-based dashboard experience.",

  classes: {
    page: "min-h-screen bg-slate-100 text-slate-950",
    surface: "bg-white",
    card: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
    heading: "font-semibold tracking-tight text-slate-950",
    text: "text-slate-700",
    mutedText: "text-slate-500",
    button:
      "rounded-xl bg-slate-950 px-4 py-2 text-white transition hover:bg-slate-800",
    input:
      "rounded-xl border border-slate-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-slate-900",
    badge:
      "rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700",
  },
};
```

The shared page does not need to know how every design works. It only consumes the current theme:

```tsx
import { notFound } from "next/navigation";
import { getTheme, themes } from "@/themes";
import DesignPreview from "@/components/design-preview/DesignPreview";

type DesignPageProps = {
  params: Promise<{
    theme: string;
  }>;
};

export default async function DesignPage({ params }: DesignPageProps) {
  const { theme: themeName } = await params;

  if (!(themeName in themes)) {
    notFound();
  }

  const theme = getTheme(themeName);

  return <DesignPreview theme={theme} />;
}
```

---

## Sidebar navigation

The sidebar is driven by configuration rather than hardcoded markup.

```ts
import {
  Circle,
  Droplets,
  LayoutGrid,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

export const designPages = [
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
```

This keeps the sidebar easy to update and avoids repeating navigation markup.

---

## Adding a new design theme

Adding another visual style should require only a few focused changes.

### 1. Create the theme file

```text
themes/brutalism.ts
```

### 2. Follow the shared theme interface

```ts
import type { DesignTheme } from "./types";

export const brutalismTheme: DesignTheme = {
  name: "Brutalism",
  description: "A bold interface with strong borders and raw typography.",

  classes: {
    page: "min-h-screen bg-yellow-300 text-black",
    surface: "bg-white",
    card: "border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000]",
    heading: "font-black uppercase tracking-tight",
    text: "font-medium text-black",
    mutedText: "text-black/70",
    button:
      "border-4 border-black bg-pink-400 px-4 py-2 font-bold uppercase shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none",
    input: "border-4 border-black bg-white px-4 py-2 font-medium outline-none",
    badge: "border-2 border-black bg-lime-300 px-3 py-1 font-bold uppercase",
  },
};
```

### 3. Register the theme

```ts
export const themes = {
  // Existing themes...
  brutalism: brutalismTheme,
};
```

### 4. Add the sidebar entry

```ts
{
  name: "Brutalism",
  href: "/designs/brutalism",
  icon: Square,
}
```

The new design will then be available at:

```text
/designs/brutalism
```

No duplicate page implementation is required.

---

## Frontend architecture principles

### Reusability

Components should describe their purpose rather than a specific theme.

Prefer:

```tsx
<Card />
<Button />
<StatCard />
```

Avoid creating unnecessary duplicates such as:

```tsx
<GlassButton />
<NeumorphicButton />
<CyberpunkButton />
```

Theme configuration should control presentation wherever possible.

### Separation of concerns

The project separates:

- route handling;
- navigation configuration;
- component behaviour;
- theme definitions;
- visual design tokens.

This makes each part easier to test, maintain, and replace.

### Type safety

Themes share one TypeScript contract. If a required design token is missing, TypeScript can catch the problem before runtime.

### Progressive complexity

Not every visual difference needs to be forced into one class string. When a design requires genuinely different markup or interaction, use a controlled variant rather than creating an entirely separate application.

For example:

```tsx
type CardVariant = "standard" | "featured" | "interactive" | "metric";
```

The goal is reusable architecture, not artificial abstraction.

---

## UI and UX principles

DesignHub aims to remain usable while demonstrating visually different design systems.

Each theme should preserve:

- readable text contrast;
- visible keyboard focus;
- predictable navigation;
- comfortable spacing;
- clear interactive states;
- responsive behaviour;
- reduced-motion support;
- semantic HTML structure.

A theme should not sacrifice usability simply to look visually impressive.

---

## Accessibility

Recommended standards for every theme:

- use semantic landmarks such as `nav`, `main`, and `aside`;
- provide accessible names for icon-only controls;
- preserve visible focus styles;
- support keyboard navigation;
- maintain sufficient colour contrast;
- avoid communicating state using colour alone;
- respect `prefers-reduced-motion`;
- use correct heading order;
- test interactive components with a screen reader.

Example icon button:

```tsx
<button
  type="button"
  aria-label="Collapse sidebar"
  className="rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2"
>
  <ChevronLeft aria-hidden="true" />
</button>
```

---

## Responsive behaviour

The desktop experience uses a persistent sidebar. On smaller screens, the sidebar should become a drawer or overlay.

Suggested behaviour:

- **Desktop:** fixed or sticky expanded sidebar;
- **Tablet:** collapsible sidebar;
- **Mobile:** menu button with an accessible navigation drawer.

The main content should remain scrollable independently without causing horizontal overflow.

---

## Performance considerations

To keep the project fast as it grows:

- prefer Server Components where client-side state is not required;
- keep `"use client"` limited to interactive components;
- avoid loading all theme-specific assets on every page;
- use `next/image` for local images;
- use static theme registries where possible;
- avoid expensive animation on large blurred surfaces;
- reduce repeated arbitrary Tailwind values;
- run production builds regularly to catch routing and type issues.

Glass and blur-heavy themes should be tested carefully because large backdrop filters can become expensive on lower-powered devices.

---

## Recommended component set

A useful design showcase can gradually include:

- buttons;
- cards;
- inputs;
- badges;
- alerts;
- tabs;
- tables;
- charts;
- navigation;
- modals;
- dropdowns;
- tooltips;
- progress indicators;
- empty states;
- loading states;
- error states.

Using the same content and component structure across every theme makes the visual differences easier to compare.

---

## Possible future improvements

- Light and dark variants for every design
- Animated transitions between themes
- Live theme switcher
- Theme comparison mode
- Responsive device preview
- Interactive token editor
- Copyable component snippets
- Storybook integration
- Visual regression testing
- Accessibility audit panel
- Theme persistence
- Figma token import and export
- Component documentation
- Unit and end-to-end tests

---

## Development guidelines

When contributing to the project:

1. Keep components small and focused.
2. Prefer configuration over duplicated JSX.
3. Use meaningful TypeScript types.
4. Preserve accessibility in every theme.
5. Test layouts on mobile and desktop.
6. Avoid unnecessary client components.
7. Keep theme names and route names consistent.
8. Document unusual styling or interaction decisions.

---

## Contributing

Contributions, experiments, and improvements are welcome.

A typical contribution flow:

```bash
git checkout -b feature/new-theme
git add .
git commit -m "Add brutalism design theme"
git push origin feature/new-theme
```

Then open a pull request explaining:

- what was added;
- why the change is useful;
- how it was tested;
- whether it affects accessibility or responsive behaviour.

---

## Deployment

The application can be deployed to any platform that supports Next.js.

Before deploying, run:

```bash
npm run lint
npm run build
```

Make sure the production build succeeds and test every dynamic design route.

---

## License

This project is available under the MIT License.

You are free to use, modify, and learn from it. Attribution is appreciated but not required.

---

## Final note

DesignHub is not only a collection of visual trends. It is an exploration of how thoughtful frontend architecture can support experimentation without creating unnecessary duplication.

The project is intentionally designed to grow: new themes can be added, shared components can become more capable, and the showcase can evolve into a complete design-system playground.

Build it, break it, improve it, and make it your own.
