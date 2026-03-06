# Technology Stack

## Framework & Runtime
- **Next.js 15.3.6** with App Router (React 19)
- **TypeScript** for type safety
- **Node.js** runtime environment

## Styling & UI
- **Tailwind CSS 4.1.11** for utility-first styling
- **Tailwind Typography** plugin for content styling
- **Framer Motion** for animations and interactions
- **Radix UI** components for accessible primitives
- **Lucide React** for icons
- **shadcn/ui** component system (New York style)

## Content & Data
- **Gray Matter** for frontmatter parsing
- **Marked** for markdown processing
- **DOMPurify** for content sanitization
- **Date-fns** for date manipulation

## Deployment & Infrastructure
- **Cloudflare** deployment via OpenNext
- **R2 Incremental Cache** for performance
- **Wrangler** for Cloudflare tooling

## Development Tools
- **Turbopack** for fast development builds
- **PostCSS** for CSS processing
- **ESLint** for code linting

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Deployment
```bash
npm run preview      # Build and preview locally
npm run deploy       # Build and deploy to Cloudflare
npm run upload       # Build and upload to Cloudflare
```

### Cloudflare Types
```bash
npm run cf-typegen   # Generate Cloudflare environment types
```

## Code Style Conventions
- Use TypeScript for all new files
- Follow Next.js App Router patterns
- Utilize Tailwind utility classes over custom CSS
- Implement Radix UI for interactive components
- Use Framer Motion for animations
- Maintain responsive design principles