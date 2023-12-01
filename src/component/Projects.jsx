import { projects } from "../data"
import ProjectCard from "./ProjectCard"
import SectionTitle from "./SectionTitle"

const Projects = () => {
    return (
      <section className="py-20 align-element" id="projects ">
        <SectionTitle text={"project"} />
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    );
}
export default Projects