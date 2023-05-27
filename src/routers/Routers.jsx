import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../pages/shared/Layout/Layout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chef-recipe/:id",
        element: <ChefRecipe />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routers;
