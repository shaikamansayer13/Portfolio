import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <nav className="header-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active-link" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
