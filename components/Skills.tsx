"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    {
      category: "Front-End Development",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Bootstrap", level: 65 },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "C++", level: 50 },
        { name: "C#", level: 50 },
        { name: "Java", level: 50 },
        { name: "PHP", level: 50 },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Problem Solving", level: 85 },
        { name: "Teamwork", level: 80 },
        { name: "Attention to Detail", level: 80 },
        { name: "Communication", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Comprehensive expertise in front-end development with a focus on
            creating user-friendly interfaces.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((skill, i) => (
                  <li key={i}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
