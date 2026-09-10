import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        school: "JSPM's Rajarshi Shahu College of Engineering",
        degree: "Bachelor of Engineering in Computer Science",
        location: "PUNE, MH",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Education() {
    return (
        <section id="education" className="py-16 px-6 max-w-4xl mx-auto">
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

                {/* soft glow that fades in on hover */}
                <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.12),transparent_60%)]" />

                <div className="relative p-6 sm:p-8">
                    <motion.span
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-xs tracking-widest uppercase text-cyan-300 font-mono"
                    >
                        <span className="relative flex w-1.4 h-1.5">
                        </span>
                        Education History
                    </motion.span>

                    <motion.ul
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-8 relative border-l border-white/10 pl-6 space-y-8"
                    >
                        {education.map((edu) => (
                            <motion.li
                                key={edu.school}
                                variants={listItem}
                                className="group/item relative"
                            >
                                <span className="absolute -left-[31px] top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-black/60 border border-white/10 group-hover/item:border-purple-400/50 transition-colors duration-300">
                                    <GraduationCap size={13} className="text-purple-300" />
                                </span>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <h3 className="font-display font-semibold text-white group-hover/item:text-purple-200 transition-colors duration-300">
                                        {edu.school}
                                    </h3>
                                    <span className="font-mono text-xs tracking-wider text-gray-500 whitespace-nowrap">
                                        {edu.location}
                                    </span>
                                </div>

                                <p className="relative inline-block mt-1 text-sm text-purple-300 italic">
                                    {edu.degree}
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-purple-400 to-cyan-300 group-hover/item:w-full transition-all duration-500 ease-out" />
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    );
}