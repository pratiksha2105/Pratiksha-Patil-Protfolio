import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[30%] flex flex-col pt-18 items-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl mt-5 font-extrabold tracking-tighter uppercase text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
        >
          Pratiksha <span className="text-transparent [-webkit-text-stroke:1.5px_theme(colors.cyan.300)]">Patil</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/5 text-sm md:text-base font-mono font-medium tracking-[0.2em] uppercase text-purple-300"
        >
          Full-Stack Developer
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 text-gray-400 text-base md:text-lg font-light leading-[1.9] tracking-wide text-balance"
        >
          Full-Stack Developer with{" "}
          <span className="text-white font-normal">2+ years</span> of experience
          building fast, responsive, production-grade web applications with{" "}
          <span className="text-purple-300 font-normal">React.js</span>,{" "}
          <span className="text-cyan-300 font-normal">Next.js</span>,{" "}
          <span className="text-purple-300 font-normal">Redux</span>, and{" "}
          <span className="text-cyan-300 font-normal">Tailwind CSS</span>.
          Comfortable owning a page end-to-end from a high-level brief to a live,
          SEO-optimized, cross-device experience using AI-assisted coding workflows
          to move quickly without cutting corners. Proficient with Next.js for
          building performant, SEO-friendly routed applications, and have built and
          maintained reusable component libraries and design-system patterns that
          kept a growing codebase consistent, integrated{" "}
          <span className="text-white font-normal">REST/SOAP APIs</span> and{" "}
          <span className="text-white font-normal">JWT-based auth</span>, and
          worked on performance and search-discoverability improvements for
          high-traffic, revenue-critical flows.
        </motion.div>
      </motion.div>
    </section>
  );
}