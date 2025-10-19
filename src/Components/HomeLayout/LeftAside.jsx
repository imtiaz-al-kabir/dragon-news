import { Suspense } from "react";
import Categories from "../Categories";
import LoadingSpinner from "../LoadingSpinner";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<LoadingSpinner/>}
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
