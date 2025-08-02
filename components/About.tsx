import { motion } from "framer-motion";
import { Briefcase, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            I’m a passionate front-end developer and Information Systems student
            at Addis Ababa University (graduating June 2026). I specialize in
            crafting responsive, user-friendly web applications using React.js,
            Next.js, and Tailwind CSS. With a strong foundation in HTML, CSS,
            and JavaScript, I build intuitive interfaces that prioritize user
            experience. My skills also include basic proficiency in C++, C#,
            Java, and PHP, complemented by soft skills like problem-solving,
            teamwork, and attention to detail.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <Image
              src="/images/about-img.jpg"
              alt="Beshah Ashenafi"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="font-bold mr-2">Name:</span> Beshah Ashenafi
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">Address:</span> Addis Ababa,
                Ethiopia
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">Email:</span>{" "}
                <a
                  href="mailto:beshah2017@gmail.com"
                  className="text-primary hover:underline"
                >
                  beshah2017@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">Phone:</span>{" "}
                <a
                  href="tel:+251948100497"
                  className="text-primary hover:underline"
                >
                  +251(0)948100497
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin size={20} className="mr-2" />
                <a
                  href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <Github size={20} className="mr-2" />
                <a
                  href="https://github.com/beshah80"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center">
                <Briefcase size={20} className="mr-2" />
                <a
                  href="https://www.upwork.com/freelancers/~beshahashenafi"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Upwork
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full">
                  Coding
                </span>
                <span className="bg-primary text-white px-3 py-1 rounded-full">
                  Problem Solving
                </span>
                <span className="bg-primary text-white px-3 py-1 rounded-full">
                  Storytelling
                </span>
                <span className="bg-primary text-white px-3 py-1 rounded-full">
                  Audiobooks
                </span>
                <span className="bg-primary text-white px-3 py-1 rounded-full">
                  Fitness
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
