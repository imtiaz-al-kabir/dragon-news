import { Outlet } from "react-router";
import Header from "../Components/Header";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <LatestNews />
      <Navbar />
      <main className="my-10">
        <div className="grid grid-cols-12 grid-rows-5 gap-4 ">
          <div className="col-span-3">
            <LeftAside />
          </div>
          <div className="col-span-6 ">
            <Outlet />
          </div>
          <aside className="col-span-3">
            <RightAside />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
