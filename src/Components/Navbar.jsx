import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  const navLink = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/career", label: "Career" },
  ];

  return (
    <div className="flex justify-between items-center mt-8 px-6">
      <div></div>
      <div className=" flex gap-4 text-xl">
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
        <button className="btn btn-primary px-7 text-lg">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
