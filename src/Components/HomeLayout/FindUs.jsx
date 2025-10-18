import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us On</h1>

      <div className="join join-vertical w-full ">
        <button className="btn join-item justify-start bg-white text-lg">
          <FaFacebook />

          <span>Facebook</span>
        </button>
        <button className="btn join-item justify-start bg-white text-lg">
            <FaTwitter />
          <span>Twitter</span>
        </button>
        <button className="btn join-item justify-start bg-white text-lg">
            <FaInstagram />
          <span>Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
