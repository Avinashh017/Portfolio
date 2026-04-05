import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const name = "Avinash Kumar";

function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-800 text-white text-center px-4">

      {/* Typing Name */}
      <h1 className="text-5xl md:text-6xl font-bold flex bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-xl mt-4 text-gray-300"
      >
        Data Science || Software Development || Full Stack Web Devloper
      </motion.p>

      {/* Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8 px-6 py-3 bg-blue-500 rounded-lg hover:scale-110 hover:bg-blue-600 transition duration-300 shadow-lg"
      >
        Contact Me
      </motion.a>
      
      <motion.a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2.2 }}
  className="mt-4 px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition shadow-lg"
>
  View Resume
</motion.a>


      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="flex gap-6 mt-6 text-2xl"
      >
        <a
          href="https://github.com/Avinashh017"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 hover:scale-125 transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/avinash-kumar-4306632bb/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 hover:scale-125 transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/avinashhfx/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-400 hover:scale-125 transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/Avinashh017"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 hover:scale-125 transition duration-300"
        >
          <FaXTwitter />
        </a>
      </motion.div>

    </div>
  );
}

export default Hero;