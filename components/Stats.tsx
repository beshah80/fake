import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Stats() {
  const stats = [
    { value: 2, label: "Years of Experience" },
    { value: 9, label: "Projects Completed" },
    { value: 1000, label: "Hours of Coding" },
  ];

  return (
    <section id="stats" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-bold">
                <Counter value={stat.value} />
              </h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = value / (duration / 16);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
}
