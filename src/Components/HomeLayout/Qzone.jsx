import adImg from "../../assets/bg.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";
import swimmingImg from "../../assets/swimming.png";
const Qzone = () => {
  return (
    <>
      <div className="bg-base-200 pb-5 ">
        <h2 className="font-bold  p-5">Qzone</h2>
        <div className="flex flex-col justify-center items-center">
          <img src={swimmingImg} alt="swimming" />
          <img src={classImg} alt="class" />
          <img src={playGroundImg} alt="playground" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img className="w-full" src={adImg} alt="adImage" />
      </div>
    </>
  );
};

export default Qzone;
