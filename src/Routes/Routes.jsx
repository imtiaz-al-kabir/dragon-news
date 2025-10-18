import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";

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
      },
    ],
  },
  {
    path: "/auth",
    Component: RootLayout,
  },
  {
    path: "/news",
    Component: RootLayout,
  },
  {
    path: "*",
    Component: RootLayout,
  },
]);
