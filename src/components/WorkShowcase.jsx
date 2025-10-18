import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import videos from src/assets/videos
import sample1 from "../assets/videos/sample1.mp4";
import sample2 from "../assets/videos/sample2.mp4";
import sample3 from "../assets/videos/sample3.mp4";
import sample4 from "../assets/videos/sample4.mp4";

const tabData = {
  "All": [
    { title: "Creative Web Design", video: sample1, description: "Modern responsive layouts built with React and Tailwind." },
    { title: "Mobile App Prototype", video: sample2, description: "Cross-platform mobile UI using Flutter and Firebase." },
    { title: "E-Commerce Platform", video: sample3, description: "Scalable online shopping system built with Laravel." },
  ],
  "Web Design": [
    { title: "Portfolio Website", video: sample1, description: "Aesthetic personal portfolio with dynamic animations and sections." },
    { title: "Agency Landing Page", video: sample2, description: "Sleek, responsive landing page for creative agencies." },
  ],
  "Mobile Apps": [
    { title: "Fitness Tracker App", video: sample3, description: "Flutter-based app for health and fitness monitoring." },
    { title: "Food Delivery App", video: sample4, description: "Smooth UI/UX with real-time order tracking and Firebase integration." },
  ],
  "Full Stack": [
    { title: "Inventory Management System", video: sample2, description: "Laravel and React powered system for managing stock and analytics." },
    { title: "Real Estate Portal", video: sample3, description: "Search, filter, and manage property listings with admin control." },
  ],
};

const categories = Object.keys(tabData);

const WorkShowcase = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-[#0a0a0f] text-white min-h-screen py-16 px-6 sm:px-12 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Showcase</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-6 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative pb-1 text-lg font-medium transition-all duration-300 ${
                activeTab === category
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  transition={{ duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="wait">
            {tabData[activeTab].map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-3xl shadow-xl bg-gray-900 border border-gray-800"
              >
                {/* Video */}
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-64 object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>

                {/* Details Overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="backdrop-blur-md bg-white/10 p-5 rounded-t-3xl text-left translate-y-10 group-hover:translate-y-0 transition-all duration-700"
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkShowcase;
