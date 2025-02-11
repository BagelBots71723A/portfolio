"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "BagelBots Projects",
    description: "Various projects and contributions under the BagelBots organization.",
    link: "https://github.com/BagelBots71723A",
    tech: ["GitHub", "Collaboration", "Open Source"],
  },
  {
    title: "Discord Community",
    description: "Active Discord community for developers and tech enthusiasts.",
    link: "https://discord.gg/MQKXqMjQJm",
    tech: ["Discord", "Community", "Networking"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-[#00FFF0] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00FFF0] hover:text-cyan-300 transition-colors duration-300"
                >
                  {project.link.includes("github.com") ? (
                    <Github className="w-5 h-5" />
                  ) : (
                    <ExternalLink className="w-5 h-5" />
                  )}
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

