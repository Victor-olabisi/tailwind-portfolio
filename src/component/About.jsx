import AboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about "
      className="  py-20  bg-white
      "
    >
      <div className="grid md:grid-cols-2 align-element gap-20 items-center">
        <img src={AboutImg} alt="" className="h-80" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="pt-6 text-[#475569]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
