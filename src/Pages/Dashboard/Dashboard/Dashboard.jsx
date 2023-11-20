import { FaBars, FaCalendarAlt, FaHome, FaShoppingCart, FaUtensils, FaWallet } from "react-icons/fa";
import { FaPeopleGroup, FaShop } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { RiBookletFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { MdMail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Dashboard = () => {

    const {isAdmin} = useContext(AuthContext);

    
    const adminBars = <>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/admin-home"}><FaHome className="md:text-2xl text-xl"></FaHome>Admin Home</NavLink>
        </li>
        
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/admin-addItems"}><FaUtensils className="md:text-2xl text-xl"></FaUtensils>Add Items</NavLink>
        </li>
        
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/admin-addedItems"}><FaBars className="md:text-2xl text-xl"></FaBars>Manage Items</NavLink>
        </li>
        
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/manage-users"}><FaPeopleGroup className="md:text-2xl text-xl"></FaPeopleGroup>All Users</NavLink>
        </li>
    </>

    const userBar = <>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/user-home"}><FaHome className="md:text-2xl text-xl"></FaHome>User Home</NavLink>
        </li>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/reservation"}><FaCalendarAlt className="md:text-2xl text-xl"></FaCalendarAlt>reservation</NavLink>
        </li>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/payment-history"}><FaWallet className="md:text-2xl text-xl"></FaWallet>Payment History</NavLink>
        </li>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/user-cart"}><FaShoppingCart className="md:text-2xl text-xl"></FaShoppingCart>My Cart</NavLink>
        </li>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/user-review"}><GiStarsStack className="md:text-2xl text-xl"></GiStarsStack>Add Review</NavLink>
        </li>
        <li className="cinzel-text font-bold md:text-lg text-sm">
            <NavLink style={{fontFamily: "'Cinzel', serif"}} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
            } to={"/dashboard/user-bookings"}><RiBookletFill className="md:text-2xl text-xl"></RiBookletFill>My Booking</NavLink>
        </li>
    </>

    return (

        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen overflow-y-auto">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><FaBars /></label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <div className="flex flex-col items-start md:mb-16 mb-10 md:mt-8 mt-3">
                                <h2 className="cinzel-text uppercase md:text-2xl text-sm font-bold">Bistro Boss
                                    <p className="uppercase cinzel-text md:tracking-[7px] tracking-[4px] md:text-base text-[10px]"><span className="md:text-xl text-base cinzel-text">R</span>estaurant</p>
                                </h2>
                            </div>
                        </li>
                        


                        {/* User and admin NavBars is here */}
                        {
                            isAdmin ? adminBars : userBar
                        }

                        <div className="my-5">
                            <hr />
                        </div>

                        <li><NavLink className={"cinzel-text font-bold md:text-lg text-sm"} to={"/"}><FaHome className="md:text-2xl text-xl"></FaHome>Home</NavLink></li>
                        <li><NavLink className={"cinzel-text font-bold md:text-lg text-sm"} to={"/our-menu"}><FaBars className="md:text-2xl text-xl"></FaBars>Menu</NavLink></li>
                        <li><NavLink className={"cinzel-text font-bold md:text-lg text-sm"} to={"/our-shop/salad"}><FaShop className="md:text-2xl text-xl"></FaShop>Shop</NavLink></li>
                        <li><NavLink className={"cinzel-text font-bold md:text-lg text-sm"} to={"/contact-us"}><MdMail className="md:text-2xl text-xl"></MdMail>Contact</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;