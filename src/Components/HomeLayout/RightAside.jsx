import FindUs from "./FindUs";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div className="space-y-7">
      <SocialLogin />
      <FindUs />
      <Qzone />
    </div>
  );
};

export default RightAside;
