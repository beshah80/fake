"use client";

import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Academic foundation in Information Systems and web technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-2">
            Bachelor of Information Systems
          </h3>
          <p>
            <strong>Institution:</strong> Addis Ababa University
          </p>
          <p>
            <strong>Duration:</strong> 2023 - Expected June 2026
          </p>
          <p>
            <strong>Coursework:</strong> Web Development, Database Management,
            Software Engineering, System Analysis, Object-Oriented Programming
          </p>
        </motion.div>
      </div>
    </section>
  );
}
