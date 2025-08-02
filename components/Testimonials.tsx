import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Efuye Gela Team",
      role: "Client",
      quote:
        "Beshah delivered exceptional front-end solutions for our blog platform, showcasing strong React.js and Next.js skills.",
    },
    {
      name: "FreeCodeCamp Mentor",
      role: "Mentor",
      quote:
        "Beshah's dedication to learning and building responsive web applications is impressive. A true team player!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            What clients and mentors say about my work.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
