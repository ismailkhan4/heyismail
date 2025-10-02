import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export function convertAndSanitizeMarkdown(markdown: string): string {
  const rawHtml = marked.parse(markdown, { async: false }) as string;
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  return cleanHtml;
}
