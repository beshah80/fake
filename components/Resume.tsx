import { motion } from "framer-motion";
import Link from "next/link";

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Access my professional resume for a detailed overview.
          </p>
        </motion.div>
        <div className="flex justify-center gap-4">
          <Link
            href="/resume.pdf"
            download
            className="btn bg-primary text-white hover:bg-secondary"
          >
            Download Resume
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="btn border border-primary text-primary hover:bg-primary hover:text-white"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
