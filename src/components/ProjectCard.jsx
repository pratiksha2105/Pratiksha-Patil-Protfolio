import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, index = 0 }) {
  const fromLeft = index % 2 === 0;
  const techList = tech.split("•").map((t) => t.trim());

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="spotlight-card relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-colors"
    >
      <span className="font-display absolute -top-2 right-4 text-6xl sm:text-7xl font-bold text-white/5 select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {techList.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}