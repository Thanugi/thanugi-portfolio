import React from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Thanugi Weerasinghe
              <span className="block text-blue-400 mt-2 text-2xl sm:text-4xl">
                Computer Science Undergraduate
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              I am a passionate Computer Science student at IIT Sri Lanka,
              specializing in web development, software engineering, and AI. I
              have hands-on experience with Python, Java, SQL, React, and
              cloud-based applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex gap-6"
            >
              <a
                href="#contact"
                className="group rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 flex items-center transition-all duration-300"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Thanugi"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/thanugi-weerasinghe-6799772b5/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full blur opacity-75"></div>
            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-blue-500/50">
              <img
                src="/profile.jpg"
                alt="Thanugi Weerasinghe"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.currentTarget.src = "https://via.placeholder.com/400";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl animate-float"></div>
        <div
          className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-blue-800/10 blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>
    </div>
  );
}
