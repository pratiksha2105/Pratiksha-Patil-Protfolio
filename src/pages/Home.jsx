import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Education from "../components/Education";

export default function Home() {
  return (
    <>
      <div className="h-20">
        <Navbar />
      </div>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
