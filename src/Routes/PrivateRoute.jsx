import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
const location=useLocation()

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"} />;
};

export default PrivateRoute;
