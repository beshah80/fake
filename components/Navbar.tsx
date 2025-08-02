"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#education", label: "Education" },
    { href: "#internships", label: "Internships" },
    { href: "#certifications", label: "Certifications" },
    { href: "#resume", label: "Resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#home"
          className="text-2xl font-bold text-primary dark:text-primary"
        >
          Beshah Ashenafi
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary">
              More
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2">
              {navItems.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="https://www.upwork.com/freelancers/~beshahashenafi"
            target="_blank"
            className="btn bg-primary text-white hover:bg-secondary"
          >
            Hire Me
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="lg:hidden bg-white dark:bg-gray-800 px-4 py-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://www.upwork.com/freelancers/~beshahashenafi"
            target="_blank"
            className="block py-2 text-primary dark:text-primary"
          >
            Hire Me
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
