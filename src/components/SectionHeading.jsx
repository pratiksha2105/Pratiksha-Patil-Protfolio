import { motion } from "framer-motion";

export default function SectionHeading({ index, eyebrow, title, highlight, align = "center" }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col mb-12 ${alignClass}`}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-cyan-300/80 mb-3">
        <span className="text-purple-400">//</span>
        {index && <span className="text-gray-500">{index}</span>}
        {eyebrow}
      </span>

      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}{" "}
        <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300 origin-left"
      />
    </motion.div>
  );
}