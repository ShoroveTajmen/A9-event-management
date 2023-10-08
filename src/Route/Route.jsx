import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ServiceCard from "../Pages/ServiceCard/ServiceCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BuyTicket from "../Pages/BuyTicket/BuyTicket";
import Speakers from "../Pages/Speakers/Speakers";

const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/ticket",
        element: <BuyTicket></BuyTicket>,
      },
      {
        path: '/speakers',
        element: <Speakers></Speakers>
      },
      {
        path: "/serviceCard/:ServiceID",
        element: (
          <PrivateRoute>
            <ServiceCard></ServiceCard>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default myCreateRoute;
