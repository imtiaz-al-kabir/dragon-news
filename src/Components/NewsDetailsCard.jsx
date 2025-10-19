import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    image_url,
    details,
    author,
    rating,
    total_view,
    tags,
    category_id,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 p-4 md:p-6 rounded-2xl">
      {/* Image */}
      <figure className="rounded-xl overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
      </figure>

      {/* Content */}
      <div className="card-body px-2 md:px-4">
        <h2 className="card-title text-2xl font-bold leading-snug">{title}</h2>

        {/* Author + Date */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Details */}
        <p className="mt-4 text-gray-700 leading-relaxed">{details}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline text-sm capitalize hover:bg-base-200 transition"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-base-300">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-sm font-semibold">{rating?.number}</span>
            <span className="badge badge-warning text-xs ml-2">
              {rating?.badge}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span className="text-sm">
              {total_view?.toLocaleString()} views
            </span>
          </div>
        </div>

        {/* Category Button */}
        <div className="mt-6">
          <Link
            to={`/category/${category_id}`}
            className="btn btn-secondary text-white rounded-full"
          >
            ← All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
