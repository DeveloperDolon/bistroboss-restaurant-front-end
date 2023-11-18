
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
import Reservation from "../Pages/Dashboard/Pages/UserReservation/Reservation";
import UserPayment from "../Pages/Dashboard/Pages/UserReservation/UserPayment";
import PaymentHistory from "../Pages/Dashboard/Pages/PaymentHistory/PaymentHistory";
import ReservationHome from "../Pages/Dashboard/Pages/UserReservation/ReservationHome";
import UserCart from "../Pages/Dashboard/Pages/Cart/UserCart";
import UserReview from "../Pages/Dashboard/Pages/Review/UserReview";
import UserBookings from "../Pages/Dashboard/Bookings/UserBookings";
import ErrorPage from "../Pages/Error/ErrorPage";

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
            { index: true, element:<h3>Hello world</h3> },
            {
                path: "/dashboard/home",
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: "/dashboard/reservation/",
                element: <PrivateRoute><ReservationHome></ReservationHome></PrivateRoute>,
                children: [
                    {
                        path: "/dashboard/reservation/",
                        element: <PrivateRoute><Reservation></Reservation></PrivateRoute>,
                    },
                    {
                        path: "/dashboard/reservation/user-payment",
                        element: <PrivateRoute><UserPayment></UserPayment></PrivateRoute>
                    }
                ]
            },
            {
                path: "/dashboard/payment-history",
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            {
                path: "/dashboard/user-cart",
                element: <PrivateRoute><UserCart></UserCart></PrivateRoute>
            },
            {
                path: "/dashboard/user-review",
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>
            },
            {
                path: "/dashboard/user-bookings",
                element: <PrivateRoute><UserBookings></UserBookings></PrivateRoute>
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
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
])

export default MainRoute;