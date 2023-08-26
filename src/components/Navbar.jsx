const Navbar = () => {
  const navbarLinks = ["solutions", "pricing", "resources", "sign-up"].map(
    (link, i) => (
      <li key={i}>
        <a href={link}>
          {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
        </a>
      </li>
    )
  );
  return (
    <nav>
      <div className="logo">
        <h1>Peboo</h1>
      </div>
      <ul className="links">{navbarLinks}</ul>
    </nav>
  );
};

export default Navbar;
