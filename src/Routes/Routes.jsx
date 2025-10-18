import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

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
    Component: AuthLayout,
    children:[

      {
        path:"/auth/login",Component:Login
      },
      {
        path:"/auth/register",Component:Register
      }
    ]
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
