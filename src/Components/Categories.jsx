import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);
  // console.log(categories);

  return (
    <div>
      <h1 className="font-bold text-xl">All Categories({categories.length})</h1>

      <div className="grid grid-cols-1 gap-2 pt-4">
        {categories.map((category) => (
          <NavLink key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `btn bg-base-100 text-lg text-accent hover:bg-base-200 border-0 ${
                isActive ? "bg-base-300 transition-all" : ""
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
