import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {["Data Science","Java", "Python", "MERN", "Machine Learning"].map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;