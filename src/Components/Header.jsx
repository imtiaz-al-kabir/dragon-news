import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  const now = new Date();
  const day = format(now, "EEEE");
  const monthAndDate = format(now, "MMMM MM yyyy");

  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img
        className="px-5 md:w-[471px] md:h-[60px] mt-12"
        src={logo}
        alt="logo"
      />
      <p className="text-accent text-lg">Journalism Without Fear or Favour</p>

      <h4 className="text-accent text-xl font-medium">
        <span className="text-black">{day}</span> , {monthAndDate}
      </h4>
    </div>
  );
};

export default Header;
