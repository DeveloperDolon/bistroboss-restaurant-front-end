
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menus from "../Pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";

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
            }
        ]
    }
])

export default MainRoute;