import { motion } from "framer-motion";

export function Certifications() {
  const certifications = [
    {
      title: "Responsive Web Design",
      provider: "FreeCodeCamp",
      year: "2024",
      link: "https://www.freecodecamp.org/beshah",
    },
    {
      title: "Full Stack Web Development",
      provider: "FreeCodeCamp",
      year: "In progress (Expected Nov 2025)",
    },
    {
      title: "Data Structures & Algorithms",
      provider: "FreeCodeCamp",
      year: "In progress (Expected Nov 2025)",
    },
    {
      title: "Front-End Libraries",
      provider: "FreeCodeCamp",
      year: "In progress (Expected Nov 2025)",
    },
    {
      title: "Web Development Fundamentals",
      provider: "W3Schools",
      year: "2024",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Industry-recognized credentials showcasing my expertise.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Provider:</strong> {cert.provider}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Year:</strong> {cert.year}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
