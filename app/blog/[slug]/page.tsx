import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Placeholder for dynamic blog posts
  return notFound();
}
