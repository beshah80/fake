import { motion } from "framer-motion";

export function Internships() {
  const internships = [
    {
      title: "Codveda - Front-End Development",
      description:
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
      duration: "2024",
    },
    {
      title: "Efuye Gela - Front-End Development",
      description:
        "Contributed to blog post projects and hackathons using React.js and Next.js, collaborating in a team environment.",
      duration: "2 months, 2024",
      link: "https://efuyegela.com/",
    },
  ];

  return (
    <section id="internships" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internships</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Practical experience in front-end development and teamwork.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {internship.description}
              </p>
              <p className="text-sm mb-2">
                <strong>Duration:</strong> {internship.duration}
              </p>
              {internship.link && (
                <a
                  href={internship.link}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Company Website
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
