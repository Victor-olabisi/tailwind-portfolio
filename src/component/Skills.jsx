import { skills } from "../data"
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
      <section className="align-element py-20" id="skills">
          <SectionTitle text='tech stack'/>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-16">
              {skills.map((skill) => {
                  return <SkillCard key={skill.id} {...skill} />;
              })}
          </div>
    </section>
  )
}
export default Skills