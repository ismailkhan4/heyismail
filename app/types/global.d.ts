// heyismail.com TypeScript interfaces

export interface FounderBuild {
  slug: string
  creator: string
  creator_bio: string
  product: string
  tagline: string
  description: string
  gap: string
  built: string[]
  days: number
  url: string
  stack: string[]
  accent: string
  bg: string
}

export interface ProcessDay {
  day: string
  title: string
  headline: string
  description: string
}

export interface StackItem {
  name: string
  color: string
  role: string
}

export interface ChecklistItem {
  item: string
  detail: string
}

export interface ExperienceItem {
  company: string
  role: string
  type: string
  period: string
  location: string
  highlights: string[]
}

export interface Faq {
  q: string
  a: string
}

declare global {
  interface Window {
    $crisp?: any[];
    CRISP_WEBSITE_ID?: string;
  }
}

export {};
