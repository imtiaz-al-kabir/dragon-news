import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
const [error,setError]=useState()
  const { loginUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="border-b border-gray-300 text-center py-10 text-2xl font-bold">
            Login your account
          </h1>
          <fieldset className="fieldset pt-7">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input focus-within:outline-0"
              placeholder="Email"
            />
            <label className="label ">Password</label>
            <input
              name="password"
              type="password"
              className="input focus-within:outline-0"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-xs text-red-500">{error}</p>
            }
            <button className="btn btn-neutral mt-2">Login</button>
            <p className="text-center pt-5">
              Don't Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
