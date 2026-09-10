import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
const techStack = [
  "React.js",
  "Redux",
  "Tailwind CSS",
  "REST/SOAP APIs",
  "Node.js",
];

const highlights = [
  "Built and optimized responsive, scalable React.js pages for a full-stack flight booking platform, focusing on performance, maintainability, and a consistent cross-device experience.",
  "Integrated REST and SOAP APIs for real-time flight search, booking, and reservation management, ensuring reliable data exchange across end-to-end user workflows.",
  "Designed advanced search and filtering logic that improved usability and cut average search time across high-traffic booking flows.",
  "Created and maintained a reusable component library and design-system patterns with Tailwind CSS, keeping the UI consistent as the codebase grew and lifting team development speed by ~30%.",
  "Owned global state management with Redux, improving data-flow consistency, reducing prop-drilling, and simplifying debugging application-wide.",
  "Applied SSR and on-page SEO practices to performance-critical pages to improve load times and organic discoverability; partnered with backend engineers on secure API integration.",
  "Took a hands-on approach to shipping quickly using AI coding assistants to accelerate day-to-day development while participating in sprint planning, standups, and code reviews.",
  "Awarded Best Employee of the Quarter for high-impact feature delivery and team collaboration.",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
      <SectionHeading  highlight="Experience" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        whileHover={{ borderColor: "rgba(168, 85, 247, 0.4)" }}
        className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden transition-colors duration-500"
      >
        {/* animated gradient top border */}
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-300 bg-[length:200%_100%] animate-[gradientShift_6s_ease_infinite]" />

        {/* soft glow on hover */}
        <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.12),transparent_60%)]" />

        <div className="relative p-6 sm:p-8">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/5 text-xs tracking-widest uppercase text-purple-300 font-mono"
          >
            <span className="relative flex w-1.4 h-1.5">

            </span>
            Work Experience
          </motion.span>

          <div className="mt-6 flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-black/40 border border-white/10">
              <Briefcase size={18} className="text-cyan-300" />
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-display text-xl font-semibold text-white">
                  Software Developer
                  <span className="text-purple-300"> · FareIntelligence</span>
                </h3>
                <p className="font-mono text-xs tracking-wider text-gray-500 whitespace-nowrap">
                  JUNE 2024 – PRESENT
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1">B2B platforms</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-7 space-y-3 border-t border-white/10 pt-6"
          >
            {highlights.map((point, i) => (
              <motion.li
                key={point}
                variants={listItem}
                className="group/point flex gap-3 text-sm text-gray-300 leading-relaxed"
              >
                <ArrowUpRight
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-purple-400 group-hover/point:text-cyan-300 group-hover/point:translate-x-0.5 group-hover/point:-translate-y-0.5 transition-all duration-300"
                />
                <span className="group-hover/point:text-white transition-colors duration-300">
                  {i === highlights.length - 1 ? (
                    <>
                      Awarded{" "}
                      <span className="text-white font-medium">
                        Best Employee of the Quarter
                      </span>{" "}
                      for high-impact feature delivery and team collaboration.
                    </>
                  ) : (
                    point
                  )}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}