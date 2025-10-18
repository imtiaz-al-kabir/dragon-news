import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  const navLink = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/career", label: "Career" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 px-6">
      <div></div>
      <div className=" flex  gap-4 text-xl">
        {navLink.map((link, ind) => (
          <NavLink
            key={ind}
            className={({ isActive }) =>
              isActive ? "border-b-3 border-secondary" : "text-accent"
            }
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-5">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-7 text-lg">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
