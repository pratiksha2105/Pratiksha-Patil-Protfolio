import { motion } from "framer-motion";
import { Code2, Server, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
const skillGroups = [
  {
    name: "Frontend",
    file: "frontend.js",
    icon: Code2,
    accent: "text-purple-300",
    dot: "bg-purple-400",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    name: "Backend",
    file: "backend.js",
    icon: Server,
    accent: "text-cyan-300",
    dot: "bg-cyan-400",
    skills: [
      "Node.js",
      "MongoDB",
      "Redis",
      "REST APIs",
      "SOAP APIs",
      "JSON / XML",
    ],
  },
  {
    name: "Concepts",
    file: "concepts.js",
    icon: Layers,
    accent: "text-emerald-300",
    dot: "bg-emerald-400",
    skills: [
      "Component Architecture",
      "SSR & SEO Basics",
      "Performance Optimization",
      "Responsive Design",
      "Cross-browser Compat",
    ],
  },
];

const list = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="pt-16 pb-4 px-6 max-w-6xl mx-auto">
  <SectionHeading  title="Skills &" highlight="Expertise" />

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-white/10 bg-[#0a0e1a] overflow-hidden shadow-lg shadow-black/30"
            >
              {/* Window title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <Icon size={12} className={group.accent} />
                  {group.file}
                </span>
              </div>

              {/* Terminal body */}
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-5 font-mono text-sm space-y-2.5"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={line}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className={group.accent}>$</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
                <motion.li variants={line} className="flex items-center gap-2 pt-1">
                  <span className={group.accent}>$</span>
                  <span className={`inline-block w-2 h-4 ${group.dot} cursor-blink`} />
                </motion.li>
              </motion.ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}