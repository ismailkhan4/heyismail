# Project Structure

## Root Level Configuration
- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration with SVG support
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration
- `open-next.config.ts` - Cloudflare deployment configuration
- `wrangler.jsonc` - Cloudflare Workers configuration

## Application Structure (App Router)
```
app/
├── layout.tsx          # Root layout with metadata and fonts
├── page.tsx           # Main landing page (large single-page component)
├── data.ts            # Static data (projects, testimonials, etc.)
├── favicon.ico        # Site favicon
├── components/        # App-specific components
│   ├── Footer.tsx
│   └── PageLayout.tsx
├── styles/           # Global styles
│   ├── globals.css   # Tailwind imports and custom CSS
│   └── index.css     # Additional styles
├── types/           # Type definitions
│   └── global.d.ts
└── work/           # Dynamic routes for portfolio
    └── [slug]/     # Individual project pages
```

## Shared Components
```
components/
└── ui/              # shadcn/ui components
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    └── separator.tsx
```

## Utilities & Libraries
```
lib/
├── utils.ts           # Tailwind class merging utility
├── markdown.ts        # Markdown processing utilities
└── sanitizeMarkdown.ts # Content sanitization
```

## Static Assets
```
public/
├── *.png, *.jpg, *.svg  # Images and icons
├── fonts/               # Custom font files
│   ├── PolySans-Bulky.woff2
│   └── PolySans-Slim.woff2
└── blogImages/          # Blog-related images
```

## Architecture Patterns

### Component Organization
- **App-specific components** in `app/components/`
- **Reusable UI components** in `components/ui/`
- **Page components** directly in `app/` following App Router conventions

### Data Management
- Static data centralized in `app/data.ts`
- Type definitions in `app/types/`
- No external state management (uses React state)

### Styling Approach
- Utility-first with Tailwind CSS
- Custom CSS variables for theming
- Responsive design with mobile-first approach
- Animation via Framer Motion

### File Naming Conventions
- PascalCase for React components (`PageLayout.tsx`)
- camelCase for utilities and data files (`data.ts`)
- kebab-case for UI components following shadcn convention (`button.tsx`)

### Import Patterns
- Absolute imports using TypeScript path mapping
- `@/` prefix for project root imports
- Direct relative imports for co-located files