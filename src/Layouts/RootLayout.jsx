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
        <div className="grid grid-cols-12  gap-4 ">
          <div className="col-span-3 sticky top-0 h-fit">
            <LeftAside />
          </div>
          <div className="col-span-6 ">
            <Outlet />
          </div>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
