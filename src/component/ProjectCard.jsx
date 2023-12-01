import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectCard = ({ url, github, text, title, img }) => {
  return (
    <article className="rounded-lg bg-white capitalize shadow-lg hover:shadow-xl duration-300">
      <img src={img} alt="" className="w-full h-64 rounded-t-lg" />
      <div className="p-8 ">
        <h3 className="font-medium text-lg pb-4">{title}</h3>
        <p
          className="text-[#475569]"
        >
          {text}
        </p>
        <div className="flex gap-3 mt-4 text-xl text-slate-500">
          <a href="github" className="hover:text-black duration-300">
            <FaGithubSquare />
          </a>
          <a href="url" className="hover:text-black duration-300">
            <TbWorldWww />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
