# Project Structure & Organization

## Root Level Configuration
- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration with SVG support
- `tailwind.config.js` - Tailwind CSS configuration with custom theme
- `tsconfig.json` - TypeScript configuration
- `wrangler.jsonc` - Cloudflare Workers deployment config
- `open-next.config.ts` - OpenNext Cloudflare configuration

## App Directory Structure (Next.js App Router)
```
app/
├── layout.tsx          # Root layout with fonts, metadata, scripts
├── page.tsx            # Homepage (main landing page)
├── data.ts             # Centralized data exports
├── components/         # App-specific components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── PageLayout.tsx
├── styles/
│   ├── globals.css     # Global styles with CSS variables
│   └── index.css
├── types/
│   └── global.d.ts     # Global type definitions
└── [feature-folders]/ # Feature-based routing
    ├── about/
    ├── contact/
    ├── process/
    └── work/
```

## Shared Components
```
components/
└── ui/                 # shadcn/ui components
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    └── separator.tsx
```

## Utilities & Libraries
```
lib/
├── utils.ts           # cn() utility function
├── markdown.ts        # Markdown processing
└── sanitizeMarkdown.ts # Content sanitization
```

## Static Assets
```
public/
├── fonts/             # Custom font files
├── blogImages/        # Blog/content images
├── creators/          # Creator profile images
└── [various-assets]   # Icons, images, etc.
```

## Naming Conventions
- **Files**: PascalCase for components (`Navigation.tsx`), camelCase for utilities (`utils.ts`)
- **Folders**: kebab-case for routes (`contact/`), camelCase for feature folders
- **Components**: PascalCase with descriptive names
- **CSS Classes**: Tailwind utility classes, custom CSS variables with `--` prefix

## Data Organization
- Centralized data exports in `app/data.ts`
- Type definitions in `app/types/global.d.ts`
- SEO data and schemas included in main data file

## Component Patterns
- Use `"use client"` directive for interactive components
- Framer Motion for animations with `motion.*` components
- Conditional rendering with proper TypeScript types
- Image optimization with `next/image`