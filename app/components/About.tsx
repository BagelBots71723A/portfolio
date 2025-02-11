"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Bot, Sparkles } from "lucide-react"

export default function About() {
  const interests = [
    {
      icon: <Code2 className="w-8 h-8 text-[#00FFF0]" />,
      title: "Frontend Dev",
      description: "Creating beautiful web experiences",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00FFF0]" />,
      title: "Swift UI",
      description: "Building iOS applications",
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00FFF0]" />,
      title: "LLM Development",
      description: "Exploring AI possibilities",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#00FFF0]" />,
      title: "Learning",
      description: "Always expanding knowledge",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 transition-colors duration-300 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Hey there! I'm a 13-year-old developer who loves creating awesome things with code. My journey started
              with frontend development, and now I'm exploring exciting areas like Swift UI and LLM development.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              When I'm not coding, I'm learning new technologies, collaborating with others, and working on cool
              projects. I believe in sharing knowledge and contributing to the developer community.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {interests.map((interest, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                {interest.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{interest.title}</h3>
                <p className="text-gray-300">{interest.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

