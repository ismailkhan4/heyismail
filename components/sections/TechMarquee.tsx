interface TechMarqueeProps {
  technologies?: string[];
  className?: string;
}

const defaultTechnologies = [
  'Next.js',
  'Supabase', 
  'Stripe',
  'OpenAI API',
  'Vercel',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Webhooks',
  'Custom Auth'
];

export default function TechMarquee({ 
  technologies = defaultTechnologies, 
  className = '' 
}: TechMarqueeProps) {
  // Duplicate the technologies array to create seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className={`py-12 overflow-hidden ${className}`}>
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 mx-6 px-4 py-2 bg-surface border border-light/10 rounded-full text-sm text-light/60 whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}