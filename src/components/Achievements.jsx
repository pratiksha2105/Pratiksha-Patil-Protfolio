import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const achievements = [
  { icon: "🏆", label: "Best Employee of the Quarter", accent: "from-amber-400 to-orange-500" },
  { icon: "🚀", label: "Smart India Hackathon Finalist", accent: "from-purple-400 to-fuchsia-500" },
  { icon: "🥇", label: "ACM Student Chapter Award Winner", accent: "from-cyan-400 to-blue-500" },
  { icon: "⚽", label: "State Level RollBall Player", accent: "from-emerald-400 to-teal-500" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const badge = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 16 },
  },
};

export default function Achievements() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <SectionHeading title="Achievements &" highlight="Awards" />


      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.label}
            variants={badge}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col items-center"
          >
            <div
              className={`relative shine-sweep overflow-hidden flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${item.accent} p-[2px] transition-transform duration-300 group-hover:scale-110`}
            >
              <div className="flex items-center justify-center w-full h-full rounded-full bg-[#05070d] text-3xl sm:text-4xl">
                {item.icon}
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300 leading-snug group-hover:text-white transition-colors duration-300">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}