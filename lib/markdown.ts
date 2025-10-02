// lib/markdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  metaDescription: string;
  featuredImage: string;
  featuredImageAlt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "app/posts");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDirectory);

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      ...(data as Omit<BlogPost, "content">),
      slug,
      content,
    };
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    ...(data as Omit<BlogPost, "content">),
    slug,
    content,
  };
}
