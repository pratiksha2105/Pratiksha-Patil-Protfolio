import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-display text-2xl font-semibold text-white">Pratiksha Patil</h1>
        <div className="hidden md:flex gap-1 text-sm text-gray-300">
          <a href="#home" className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">Home</a>
          <a href="#skills" className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">Skills</a>
          <a href="#projects" className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">Projects</a>
          <a href="#experience" className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">Experience</a>
          <a href="#education" className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">Education</a>
          <a href="#contact" className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">Contact</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-gray-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur"
          >
            <div className="flex flex-col px-6 py-4 gap-1 text-sm">
              <a href="#home" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Home</a>
              <a href="#skills" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Skills</a>
              <a href="#projects" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Projects</a>
              <a href="#experience" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Experience</a>
              <a href="#education" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Education</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}