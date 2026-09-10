import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
    <SectionHeading  highlight="Projects" />


      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}