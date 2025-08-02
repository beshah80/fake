import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug } = await params;
  // Placeholder for dynamic blog posts
  return notFound();
}
