"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Explore my thoughts on web development and technology.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-2">Blog Post Platform</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Check out my Next.js blog platform, showcasing server-side rendering
            and modern UI design.
          </p>
          <Link
            href="https://github.com/beshah80/blog-post-nextjs"
            target="_blank"
            className="btn bg-primary text-white hover:bg-secondary"
          >
            View Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
