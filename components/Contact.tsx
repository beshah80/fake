"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Reach out to discuss projects or opportunities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
          >
            <MapPin size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>Addis Ababa, Ethiopia</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
          >
            <Phone size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a
              href="tel:+251948100497"
              className="text-primary hover:underline"
            >
              +251(0)948100497
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
          >
            <Mail size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a
              href="mailto:beshah2017@gmail.com"
              className="text-primary hover:underline"
            >
              beshah2017@gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
          >
            <MessageCircle size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/+251948100497"
              target="_blank"
              className="text-primary hover:underline"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
              target="_blank"
              className="text-primary hover:text-secondary"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://github.com/beshah80"
              target="_blank"
              className="text-primary hover:text-secondary"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~beshahashenafi"
              target="_blank"
              className="text-primary hover:text-secondary"
            >
              <Briefcase size={30} />
            </a>
          </div>
          <Link
            href="/contact.vcf"
            download
            className="btn bg-primary text-white hover:bg-secondary mt-6 inline-block"
          >
            Download vCard
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
