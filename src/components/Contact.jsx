import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail />,
      label: "Email",
      value: "pratikshap2404@gmail.com",
      href: "mailto:pratikshap2404@gmail.com",
    },
    {
      icon: <Github />,
      label: "GitHub",
      value: "github.com/pratiksha2105",
      href: "https://github.com/pratiksha2105",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/pratikshapatil21",
      href: "https://www.linkedin.com/in/pratikshapatil21",
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+91 72188 66759",
      href: "tel:+917218866759",
    },
  ];

  return (
    <section id="contact" className="py-10 text-center relative">
      {/* Subtle glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      <SectionHeading  title="Let's" highlight="Connect" />

      {/* Horizontal row */}
      <motion.div className="flex justify-center items-center gap-5 mt-12">
        {contacts.map((item, index) => (
          <ExpandItem key={index} {...item} />
        ))}
      </motion.div>
    </section>
  );
}

function ExpandItem({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={false}
      whileHover="hover"
      className="
        group relative
        flex items-center
        overflow-hidden
        h-14
        rounded-full
        border border-purple-500/30
        bg-white/5 backdrop-blur
        cursor-pointer
        
      "
    >
      {/* Icon - absolutely centered */}
      <div className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center text-purple-400 group-hover:text-white transition">
        {icon}
      </div>

      {/* Expandable content - padding left to avoid icon overlap */}
      <motion.div
        variants={{
          hover: { width: "auto", opacity: 1 },
        }}
        initial={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center whitespace-nowrap pl-14"
      >
        <div className="text-left">
          <p className="text-xs text-gray-400">{label}</p>
          <p className="text-sm text-white pr-2">{value}</p>
        </div>
      </motion.div>
    </motion.a>
  );
}
