import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-dark.jpg";
import { Phone, Mail, Linkedin, MessageCircle } from "lucide-react";

const Hero = () => {
  const circles = [0, 1, 2, 3];
  const circleSpacing = 45;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-6xl w-full">
        {/* Greeting */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4">
          Hi There!{" "}
          <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-400 drop-shadow-md">
            Subair MS
          </span>{" "}
          Here
        </h2>

        {/* Senior + Star */}
        <div className="flex items-center gap-3 mb-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Senior
          </motion.h1>

          <motion.img
            src="https://framerusercontent.com/images/Otde49cy0PsLSCUBY073AdND0s.svg"
            alt="Star"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
        </div>

        {/* Circles + Full Stack Developer */}
        <div className="relative flex items-center justify-start mb-8">
          {circles.map((i) => (
            <motion.div
              key={i}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-indigo-400 rounded-full absolute"
              style={{ left: `${i * circleSpacing}px` }}
              animate={{ x: [0, 8, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3 + i * 0.5,
                ease: "easeInOut",
              }}
            ></motion.div>
          ))}

          <div
            className="absolute top-1/2 h-0.5 bg-indigo-400/60"
            style={{
              left: 0,
              width: `${(circles.length - 1) * circleSpacing + 40}px`,
            }}
          ></div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white ml-[200px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Full Stack Developer
          </motion.h2>
        </div>

        {/* Paragraph */}
        <motion.p
          className="text-gray-300 max-w-xl text-center text-base sm:text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a passionate full stack developer crafting beautiful, responsive,
          and user-friendly web and mobile experiences. Focused on clean code,
          smooth performance, and powerful design.
        </motion.p>

        {/* Hero Contacts (Circular Icons + Tooltip for WhatsApp) */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mt-6 flex-wrap">
          {[
            {
              icon: <Phone size={20} />,
              href: "tel:+97450143321",
              bg: "from-cyan-500 to-blue-500",
              tooltip: "Call Me",
            },
            {
              icon: <Mail size={20} />,
              href: "mailto:sbwebofficial92@gmail.com",
              bg: "from-purple-500 to-pink-500",
              tooltip: "Email Me",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://www.linkedin.com/in/subair-ms-b98635203",
              bg: "from-green-400 to-cyan-400",
              tooltip: "LinkedIn",
              target: "_blank",
            },
            {
              icon: <MessageCircle size={20} />,
              href: "#",
              bg: "from-green-500 to-green-400",
              tooltip: "+974 5014 3321",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <motion.a
                href={item.href}
                target={item.target || "_self"}
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${item.bg} text-white shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.a>
              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 px-3 py-1 text-sm rounded-lg bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.tooltip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
