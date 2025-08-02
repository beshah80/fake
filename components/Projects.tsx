"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "PhoneSell E-commerce Platform",
      description:
        "A full-stack e-commerce platform for mobile phone sales with user authentication and payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "/images/projects/phonesell.jpg",
      link: "https://github.com/beshah80/phoneShop",
    },
    {
      title: "Adheno Non-Profit Website",
      description:
        "A responsive website for a non-profit with donation and event management systems.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
      image: "/images/projects/adheno.jpg",
      link: "https://github.com/beshah80/adheno",
    },
    {
      title: "House Rental Management System",
      description:
        "A system for managing house rentals, including tenant and payment tracking.",
      tech: ["System Analysis", "UML", "Documentation"],
      image: "/images/projects/house-rental.jpg",
      link: null,
    },
    {
      title: "Hotel Management System",
      description:
        "A Java-based application for hotel management with booking and billing functionalities.",
      tech: ["Java", "JavaFX"],
      image: "/images/projects/hotel-management.jpg",
      link: null,
    },
    {
      title: "Student Management System",
      description: "A C++ application for managing student records and grades.",
      tech: ["C++"],
      image: "/images/projects/student-management.jpg",
      link: null,
    },
    {
      title: "Blog Post Platform",
      description:
        "A dynamic blog platform built with Next.js, featuring server-side rendering and a modern UI.",
      tech: ["Next.js", "Tailwind CSS"],
      image: "/images/projects/blog-post.jpg",
      link: "https://github.com/beshah80/blog-post-nextjs",
    },
    {
      title: "Tenacare Health Platform",
      description:
        "A responsive health platform with a focus on user-friendly design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/images/projects/tenacare.jpg",
      link: "https://github.com/beshah80/tenacare-health-platform",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "A simple, interactive tic-tac-toe game built with Next.js.",
      tech: ["Next.js", "TypeScript"],
      image: "/images/projects/tic-tac-toe.jpg",
      link: "https://github.com/beshah80/tic-tac-toe",
    },
    {
      title: "To-Do List App",
      description:
        "A task management app with a clean interface for organizing daily tasks.",
      tech: ["React.js"],
      image: "/images/projects/to-do-list.jpg",
      link: "https://github.com/beshah80/to-do-list",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions built with modern web technologies.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-sm mb-4">
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="btn bg-primary text-white hover:bg-secondary"
                  >
                    <ExternalLink size={20} className="mr-2" /> View Project
                  </Link>
                ) : (
                  <button
                    className="btn bg-gray-300 text-gray-600 cursor-not-allowed"
                    disabled
                  >
                    <ExternalLink size={20} className="mr-2" /> View Project
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
