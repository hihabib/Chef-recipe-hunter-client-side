import { createBrowserRouter } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routers;
