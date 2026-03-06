import React from "react";
import { notFound } from "next/navigation";
import { getBuildBySlug, getAllBuildSlugs } from "../../data";
import BuildDetailClient from "./BuildDetailClient";

export async function generateStaticParams() {
  const slugs = getAllBuildSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface BuildDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BuildDetailPage = async ({ params }: BuildDetailPageProps) => {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

  if (!build) {
    notFound();
  }

  return <BuildDetailClient build={build} />;
};

export default BuildDetailPage;