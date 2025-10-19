import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const fname = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="border-b border-gray-300 text-center py-10 text-2xl font-bold">
            Register your account
          </h1>
          <fieldset className="fieldset pt-7">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="fname"
              className="input focus-within:outline-0"
              placeholder="Enter your name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input focus-within:outline-0"
              placeholder="Enter Your Photo url"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input focus-within:outline-0"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input focus-within:outline-0"
              placeholder="Password"
              required
            />
            <label className="label pt-2">
              <input type="checkbox" className="checkbox" required />
              Accept Term & Conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-2">
              Register
            </button>
            <p className="text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
