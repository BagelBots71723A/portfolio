"use client"

import Image from "next/image"
import { Github, DiscIcon as Discord } from "lucide-react"
import { motion } from "framer-motion"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF0] via-cyan-500 to-blue-600 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 mx-auto lg:mx-0 w-32 h-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile.jpg-90tskaoOaYwp4sLMwJTo4EJfGxi7XC.jpeg"
                alt="Nexus Dev Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFF0] to-cyan-400">
              Nexus Dev
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">Frontend Developer</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              13-year-old developer passionate about creating amazing web experiences. Exploring Swift UI and LLM
              development.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/BagelBots71723A"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/80 hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-[#00FFF0]" />
              </a>
              <a
                href="https://discord.gg/MQKXqMjQJm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/80 hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Discord Server"
              >
                <Discord className="w-6 h-6 text-[#00FFF0]" />
              </a>
            </div>
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFF0] text-gray-900 rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF0] to-cyan-500 opacity-20 animate-pulse"></div>
              <div className="relative h-full w-full bg-gray-800 rounded-lg p-6 flex items-center justify-center">
                <div className="text-[#00FFF0] text-6xl animate-pulse">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    👨‍💻
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-[#00FFF0] to-cyan-500 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  )
}

