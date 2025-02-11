"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Bot, Layout, GitBranch, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    tech: "HTML, CSS, JavaScript",
    color: "text-[#00FFF0]",
  },
  {
    icon: Layout,
    name: "UI Design",
    tech: "Responsive Design, User Experience",
    color: "text-[#00FFF0]",
  },
  {
    icon: Cpu,
    name: "Swift UI",
    tech: "iOS Development",
    color: "text-[#00FFF0]",
  },
  {
    icon: Bot,
    name: "LLM Development",
    tech: "AI Integration, Prompt Engineering",
    color: "text-[#00FFF0]",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub",
    color: "text-[#00FFF0]",
  },
  {
    icon: Smartphone,
    name: "Mobile Development",
    tech: "iOS, Swift",
    color: "text-[#00FFF0]",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-gray-700">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#00FFF0] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">{skill.tech}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

