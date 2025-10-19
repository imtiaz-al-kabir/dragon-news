import { Suspense } from "react";
import Categories from "../Categories";
import LoadingSpinner from "../LoadingSpinner";
import TrendingNews from "../TrendingNews";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Categories />
      </Suspense>
      <TrendingNews />
    </div>
  );
};

export default LeftAside;
