import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-primary to-secondary text-white"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-accent">Beshah Ashenafi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            Front-End Developer & Information Systems Student
          </h2>
          <p className="text-lg mb-6">
            Building responsive, user-centric web applications with React.js,
            Next.js, and Tailwind CSS.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              href="#contact"
              className="btn bg-accent text-gray-900 hover:bg-yellow-400"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="btn border border-accent text-accent hover:bg-accent hover:text-gray-900"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <Image
            src="/images/hero-img.jpg"
            alt="Beshah Ashenafi"
            width={400}
            height={400}
            className="rounded-full shadow-lg mx-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
