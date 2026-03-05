// TypeScript interfaces for heyismail.com data structure

export interface SiteMeta {
  name: string
  tagline: string
  description: string
  email: string
  linkedin: string
  calendly: string
  location: string
  mvps_shipped: string
  years_experience: string
}

export interface StackItem {
  name: string
  color: string  // Hex color for brand dot
  role: string   // e.g., "Frontend & Backend"
}

export interface ProcessDay {
  day: string        // e.g., "Day 1" or "Day 2–3"
  title: string      // e.g., "Define"
  description: string
}

export interface FounderCase {
  slug: string           // URL slug
  founder: string        // Founder name
  founder_bio: string    // One-line bio
  product: string        // Product name
  tagline: string        // Product tagline
  description: string    // Problem description
  gap: string            // What was missing
  built: string[]        // Array of features built
  days: number           // Build duration (always 7)
  url: string            // Live demo URL
  stack: string[]        // Technologies used
  color: string          // Primary color (hex)
  accent: string         // Accent color (hex)
}

export interface Experience {
  company: string
  role: string
  type: string           // "Full-time" | "Freelance"
  period: string         // e.g., "Sep 2024 – Present"
  location: string
  highlights?: string[]  // Optional achievements
}

export interface Faq {
  q: string  // Question
  a: string  // Answer
}

export interface ChecklistItem {
  item: string    // Main checklist item
  detail: string  // Supporting detail
}