import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const navbarLinks = ["solutions", "pricing", "resources", "sign-up"].map(
    (link, i) => (
      <li
        key={i}
        className={`duration-200 ${
          navbarBackground ? "hover:text-indigo-200" : "hover:text-indigo-700"
        }`}
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
      className={`fixed top-0 left-0 right-0 z-50 duration-200 rounded-b-[3rem] ${
        navbarBackground && "bg-indigo-900 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-10">
        <div className="logo">
          <h1 className="font-work-sans text-3xl ">Peboo</h1>
        </div>
        <ul className="links flex gap-20">{navbarLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
