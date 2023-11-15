import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import defaultUserImg from "../assets/others/profile.png";
import cartImg from "../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
import toast from "react-hot-toast";
import useAccessCart from "../Hooks/useAccessCart";

const MainLayout = () => {

    const {data} = useAccessCart();
    const { user, logOut } = useContext(AuthContext);
    
    const navItems = <>
        <li>
            <NavLink className="hover:text-lime-300" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink className="hover:text-lime-300" to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
            <NavLink className="hover:text-lime-300" to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink className="hover:text-lime-300" to="/our-menu">Our Menu</NavLink>
        </li>
        <li>
            <NavLink className="hover:text-lime-300" to={`/our-shop/${"salad"}`}>Our Shop</NavLink>
        </li>
        <li>
            {
                !user && <NavLink className="hover:text-lime-300" to="/login">Login</NavLink>
            }
        </li>
    </>

    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success('User logged out Successful!.', {
                style: {
                    border: '1px solid black',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: '#D1A054B2',
                    secondary: '#FFFAEE',
                },
            });
        }).catch(err => {
            toast.error(err.message, {
                style: {
                    border: '1px solid black',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: '#D1A054B2',
                    secondary: '#FFFAEE',
                },
            });
        })
    }

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="bg-black bg-opacity-50 text-white fixed top-0 w-full z-40">
                        <div className="w-full navbar max-w-[1500px] mx-auto font-bold">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 grid grid-cols-1">
                                <h2 className="cinzel-text uppercase md:text-2xl text-sm font-bold">Bistro Boss</h2>
                                <p className="uppercase cinzel-text md:tracking-[7px] tracking-[4px] md:text-base text-[10px]"><span className="md:text-xl text-base cinzel-text">R</span>estaurant</p>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal uppercase">
                                    {/* Navbar menu content here */}
                                    {navItems}
                                </ul>
                            </div>

                            {
                                user && <div className="flex gap-3">
                                    <NavLink className="relative" to={"/cart"}>
                                        <img className="md:w-12 w-10" src={cartImg} alt="" />
                                        <span 
                                        className="md:text-sm text-xs bg-red-500 text-black absolute px-2 rounded-full bottom-0 right-[1px]"
                                        >{data?.length || 0}</span>
                                    </NavLink>
                                    <button className="uppercase text-sm" onClick={handleLogOut}>Log Out</button>
                                    <img className="md:w-10 w-8 rounded-full" src={user?.photoURL ? user?.photoURL : defaultUserImg} title={user?.displayName || "User Image"} alt={user?.displayName || "Users Image"} />
                                </div>
                            }

                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 font-bold uppercase">
                        {/* Sidebar content here */}
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;