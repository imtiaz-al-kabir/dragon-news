import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [todaysNews, setTodaysNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setTodaysNews(data));
  }, []);
  const todaysPick = todaysNews.filter(
    (news) => news.others?.is_today_pick === true
  );
  return (
    <div className="bg-base-200 flex gap-4 items-center py-4 px-6 mt-7 mx-7">
      <p className="btn btn-secondary text-xl">Latest</p>
      <Marquee pauseOnHover={true}>
        {todaysPick.map((news) => (
          <span key={news.id} className="mx-8 font-semibold">
            {news.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
