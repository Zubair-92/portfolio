import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "WorkShowcase", href: "#projects" },
  ];

  const social = [
    { icon: <Phone size={20} />, href: "tel:+97450143321" },
    { icon: <Mail size={20} />, href: "mailto:sbwebofficial92@gmail.com" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/subair-ms-b98635203" },
    { icon: <FaWhatsapp size={20} />, number: "+97450143321" }, // WhatsApp
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-950 text-white py-12 relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div
        className="absolute w-60 h-60 bg-indigo-500/20 rounded-full top-10 left-10 blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-cyan-500/20 rounded-full bottom-10 right-10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Quick Links */}
        <motion.div
          className="flex gap-6 flex-wrap justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-indigo-400 transition-colors font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Contact / Social Icons */}
        <motion.div
          className="flex gap-4 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {social.map((s, idx) => (
            <div key={idx} className="relative group">
              <a
                href={s.href ? s.href : "#"}
                target={s.icon.type === Linkedin ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {s.icon}
              </a>

              {/* Tooltip for WhatsApp number */}
              {s.number && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.number}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-gray-500 text-center mt-8 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        &copy; {new Date().getFullYear()} Subair MS. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
