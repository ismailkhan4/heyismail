import { Metadata } from 'next';
import { getBuildBySlug } from '../../data';

interface BuildLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const build = getBuildBySlug(slug);
  
  if (!build) {
    return {
      title: 'Build Not Found',
      description: 'The requested build could not be found.',
    };
  }

  return {
    title: `${build.product.name} - Concept Build by Ismail Muhammad`,
    description: `${build.product.tagline} - A detailed case study of how I studied ${build.creator.name}'s methodology and built a platform around it.`,
    keywords: [
      build.product.name,
      build.creator.name,
      'concept build',
      'SaaS development',
      'MVP development',
      'platform development'
    ],
    openGraph: {
      title: `${build.product.name} - Concept Build`,
      description: build.product.tagline,
      url: `https://heyismail.com/builds/${build.slug}`,
    },
  };
}

export default function BuildLayout({ children }: BuildLayoutProps) {
  return children;
}