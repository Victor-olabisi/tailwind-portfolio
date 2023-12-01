import { links } from "../data";

const NavBar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element flex flex-col gap-y-6  gap-x-16 py-4 sm:flex-row sm:py-8 sm:items-center">
        <h2 className="text-3xl font-bold capitalize">
          web<span className="text-emerald-600 capitalize">Dev</span>
        </h2>
        <div className="flex gap-x-3 ">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                className="capitalize text-lg hover:text-emerald-50-600 tracking-wide "
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
