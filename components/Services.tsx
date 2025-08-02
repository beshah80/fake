import { motion } from "framer-motion";
import { Code, FileText, Globe, Keyboard, PenTool, Shield } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Building responsive, user-friendly interfaces with modern frameworks.",
      icon: <Code size={40} />,
    },
    {
      title: "Web Development",
      description:
        "Creating full-stack applications with a focus on front-end excellence.",
      icon: <Globe size={40} />,
    },
    {
      title: "Resume Writing",
      description: "Crafting professional resumes for career success.",
      icon: <FileText size={40} />,
    },
    {
      title: "Typing Services",
      description: "Fast and accurate typing for documents and data entry.",
      icon: <Keyboard size={40} />,
    },
    {
      title: "Information Security",
      description: "Guidance on securing web applications and systems.",
      icon: <Shield size={40} />,
    },
    {
      title: "Copywriting",
      description: "Creating engaging content for websites and interfaces.",
      icon: <PenTool size={40} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Tailored solutions to meet your digital and professional needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
