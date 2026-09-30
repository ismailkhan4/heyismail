import { notFound } from "next/navigation";

// Any URL that isn't a real page renders the localized 404.
export default function CatchAll() {
  notFound();
}
