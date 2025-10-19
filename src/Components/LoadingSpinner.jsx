import { BounceLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <BounceLoader color="#e50000" size={70} />
    </div>
  );
};

export default LoadingSpinner;
