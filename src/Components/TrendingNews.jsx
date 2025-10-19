import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

const TrendingNews = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);
  const trendingNews = trending.filter(
    (news) => news.others?.is_trending === true
  );
  return (
    <div className="flex flex-col gap-5 ">
      {trendingNews.map((news) => (
        <div key={news.id} className="shadow p-4 hidden md:block">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-36 object-cover rounded-xl"
          />
          <h3 className="font-semibold leading-snug hover:text-primary cursor-pointer">
            {news.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <p className="font-medium text-gray-600">{news.category}</p>
            <span>{news.rating.badge}</span>
            <CalendarDays className="w-4 h-4" />
            <p>{news.author.published_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingNews;
