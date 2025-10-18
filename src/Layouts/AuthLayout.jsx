import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
