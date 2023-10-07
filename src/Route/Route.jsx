import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServiceCard from "../Pages/ServiceCard/ServiceCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/serviceCard/:ServiceID',
                element: <ServiceCard></ServiceCard>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default myCreateRoute;