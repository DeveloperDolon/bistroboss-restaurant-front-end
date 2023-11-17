
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menus from "../Pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/Pages/UserHome/UserHome";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "our-menu",
                element: <Menus></Menus>
            },
            {
                path: "our-shop/:category",
                element: <OurShop></OurShop>
            },
            {
                path: "contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/home",
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
            }
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    }
])

export default MainRoute;