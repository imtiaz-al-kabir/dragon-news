import { createBrowserRouter } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Layouts/NewsDetails";
import RootLayout from "../Layouts/RootLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <LoadingSpinner />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <LoadingSpinner />,
  },
  {
    path: "*",
    Component: RootLayout,
  },
]);
