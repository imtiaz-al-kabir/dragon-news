import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import userImg from "../assets/user.png";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/career", label: "Career" },
  ];

  const handleSignOut = () => {
    signoutUser()
      .then(() => {
        alert("Logout successfully");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="navbar bg-base-100 px-8 py-5 z-80">
      {/* Left section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link, ind) => (
              <li key={ind}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-secondary text-secondary"
                      : "text-accent"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl hidden md:block">
          Dragon News
        </Link>
      </div>

      {/* Center section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, ind) => (
            <li key={ind}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 text-xl border-secondary text-secondary"
                    : "text-accent text-xl"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section */}
      <div className="navbar-end flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src={user?.photoURL || userImg}
          alt="user"
        />

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary px-7 text-lg"
          >
            Sign out
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
