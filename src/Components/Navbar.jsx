import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import userImg from "../assets/user.png";
const Navbar = () => {
  const { user, signoutUser } = use(AuthContext);
  const navLink = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/career", label: "Career" },
  ];
  console.log(user);

  const handleSignOut = () => {
    signoutUser()
      .then(() => {
        alert("logout successfully");
      })
      .catch((error) => console.log(error.message));
  };
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
        <img className="size-12 rounded-full" src={`${user ? user.photoURL : userImg}`} alt="user image" />

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary px-7 text-lg"
          >
            Signout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-7 text-lg">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
