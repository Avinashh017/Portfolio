import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Disaster Management System",
      desc: "Built a Disaster Management System to Help Govt to manage  all Disaster and visualization with Disaster location.",
      link: "https://github.com/Avinashh017/Disaster-Management-System."
    },
    {
      title: "Movie Recommendation System",
      desc: "Built a personalized movie recommendation system and deployed with an interactive UI.",
      link: "https://github.com/Avinashh017/Movie-Recommendation-System"
    },
    {
      title: "Stock Price Prediction",
      desc: "Developed an LSTM-based deep learning model to predict stock prices using historical data.",
      link: "https://github.com/Avinashh017/Stock-price-prediction"
    },
    {
      title: "Whatsapp Chat Analyzer",
      desc: "Analyzed WhatsApp chats to extract insights like user activity, word frequency and more using NLP.",
      link: "https://github.com/Avinashh017/whatsapp_chat_analysis"
    },
    {
      title: "Fake News Detection",
      desc: "Built an NLP-based system using TF-IDF and ML models to classify news articles as real or fake.",
      link: "https://github.com/Avinashh017/Fake-News-Detection"
    },
    {
      title: "Power BI Project",
      desc: "Created interactive dashboards to analyze KPIs, trends, and business performance using Power BI.",
      link: "https://github.com/Avinashh017/Power-BI-project"
    },
    {
      title: "Spotify Clone",
      desc: "Built a responsive Spotify clone using React with features like music playback and dynamic UI.",
      link: "https://github.com/Avinashh017/Spotify-clone"
    },
    {
      title: "OCR Project",
      desc: "Implemented OCR using OpenCV and Tesseract to extract text from images with preprocessing.",
      link: "https://github.com/Avinashh017/OCR-project"
    }
  ];

  return (
    <div id="projects" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        {projects.map((proj, i) => (
          <a key={i} href={proj.link} target="_blank" rel="noreferrer">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <h3 className="font-bold text-xl">{proj.title}</h3>
              <p className="mt-2 text-gray-600">{proj.desc}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;