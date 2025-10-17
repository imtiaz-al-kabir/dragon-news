import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-base-200 flex gap-4 items-center py-4 px-6 mt-7">
      <p className="btn btn-secondary text-xl">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
