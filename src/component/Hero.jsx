import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" bg-emerald-100 py-24">
      <div
        className="
       grid md:grid-cols-2
       align-element
       "
      >
        <article>
          <h2 className="font-bold text-7xl capitalize">i'm victor</h2>
          <p className="text-slate-900 text-3xl mt-4 capitalize">
            front-end developer
          </p>
          <p className="text-slate-900 pt-2 text-lg tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" alt="" />
        </article>
      </div>
    </section>
  );
};
export default Hero;
