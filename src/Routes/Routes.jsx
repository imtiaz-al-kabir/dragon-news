import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        path:"",Component:Home
      },
      {
        path:"/category/:id",Component:CategoryNews
      }
    ]
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
