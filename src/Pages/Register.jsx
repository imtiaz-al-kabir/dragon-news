import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="border-b border-gray-300 text-center py-10 text-2xl font-bold">
            Register your account
          </h1>
          <fieldset className="fieldset pt-7">
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Photo url"
            />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label pt-2">
              <input type="checkbox" className="checkbox" />
              Accept Term & Conditions
            </label>
            <button className="btn btn-neutral mt-2">Register</button>
            <p className="text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>{" "}
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
