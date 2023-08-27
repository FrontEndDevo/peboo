import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const navbarLinks = ["solutions", "pricing", "resources", "sign-up"].map(
    (link, i) => (
      <li
        key={i}
        className={`duration-100 p-2 rounded-full border-dotted border-4 border-indigo-700 md:border-none ${
          navbarBackground
            ? "hover:text-indigo-200 hover:border-0"
            : "hover:text-indigo-700"
        } ${i == 3 && "text-indigo-700 w-20 flex justify-center items-center"}`}
      >
        <a href={link}>
          {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
        </a>
      </li>
    )
  );

  useEffect(() => {
    const changeNavbarBackground = () => {
      setNavbarBackground(window.scrollY >= 100 ? true : false);
    };

    window.addEventListener("scroll", changeNavbarBackground);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 duration-200 rounded-b-[3rem] mx-4 mt-4 md:m-0 ${
        navbarBackground && "md:bg-indigo-900 md:text-white"
      }`}
    >
      <div className="container w-fit relative md:mx-auto md:w-full flex items-center justify-between md:py-10">
        <div className="relative">
          <h1 className="font-work-sans rounded p-1 pr-8 text-white text-3xl bg-gradient-to-r from-indigo-700">
            Peboo
          </h1>
          <span className="absolute top-1/3 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-400"></span>
          </span>
        </div>
        <ul className="origin-bottom-right flex gap-12 md:gap-20 flex-row-reverse items-center md:flex-row absolute top-0 right-1/2 -rotate-90 md:rotate-0 md:relative md:right-0">
          {navbarLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
