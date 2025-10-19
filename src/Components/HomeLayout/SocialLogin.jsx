import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { BsGithub } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";
import { auth } from "../../Firebase/firebaseConfig";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const githubProvider = new GithubAuthProvider();

const googleProvider = new GoogleAuthProvider();
const SocialLogin = () => {

const {setUser}=use(AuthContext)

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        
      })
      .catch((error) => {
       
        const errorMessage = error.message;
      });
  };
  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
       
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <h1 className="font-bold mb-5 ">Login With</h1>

      <div className="space-y-3 ">
        <button
          onClick={handleGoogle}
          className="btn w-full btn-outline btn-secondary text-md"
        >
          <IoLogoGoogle size={20} />
          <span>Login with Google</span>
        </button>
        <button
          onClick={handleGithub}
          className="btn w-full btn-outline btn-primary text-md"
        >
          <BsGithub size={20} />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
