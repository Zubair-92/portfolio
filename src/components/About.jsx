import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPhp, FaLaravel, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiFlutter, SiMysql, SiTailwindcss, SiPostman, SiJquery, SiGit, SiGodaddy } from "react-icons/si";
import profileImg from "../assets/profile.jpeg";

const skills = [
  { icon: <FaReact size={28} />, title: "React / Tailwind CSS" },
  { icon: <FaJsSquare size={28} />, title: "JavaScript / jQuery / AJAX" },
  { icon: <FaPhp size={28} />, title: "PHP / MySQL / Laravel / REST API" },
  { icon: <SiFlutter size={28} />, title: "Flutter" },
  { icon: <FaHtml5 size={28} />, title: "HTML / CSS / Bootstrap" },
  { icon: <SiPostman size={28} />, title: "Postman / REST API" },
  { icon: <SiGit size={28} />, title: "Git / Gitea" },
  { icon: <SiGodaddy size={28} />, title: "GoDaddy / Live Hosting" },
];

const About = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden" id="about">
      {/* Animated background shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-500/20 rounded-full top-10 left-10 blur-3xl animate-bounce-slow"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-cyan-500/20 rounded-full bottom-10 right-20 blur-3xl animate-bounce-slow"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Profile Image */}
        <motion.div
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500/50 flex justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400"
          >
            Hi, I’m{" "}
            <span className="text-indigo-400">Subair MS</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            With over <span className="text-indigo-400 font-semibold">8 years</span> in web development
            and <span className="text-indigo-400 font-semibold">1 year</span> in mobile app development,
            I specialize in creating modern, scalable, and responsive applications.
            I also lead <span className="text-indigo-400 font-semibold">teams & projects</span>,
            communicate with clients, and deploy live websites.
          </motion.p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + i * 0.5, ease: "easeInOut" }}
                  className="text-indigo-400 mb-3"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg font-semibold">{skill.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
