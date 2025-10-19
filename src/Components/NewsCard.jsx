import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";
const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  // Format date
  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-sm">
            <CiBookmark size={24} />
          </button>
          <button className="btn btn-ghost btn-sm">
            <IoShareSocialOutline size={24} />{" "}
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={thumbnail_url} alt="news" className="rounded-xl w-full" />
      </figure>

      {/* Details */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-700">
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
          <Link
            to={`/news-details/${id}`}
            className="text-blue-500 font-semibold cursor-pointer"
          >
            {" "}
            Read More
          </Link>
        </p>
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex items-center justify-between px-4 pb-4 border-t border-base-300 pt-2">
        <div className="flex items-center text-orange-500 gap-1">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-800 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
