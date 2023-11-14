import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {

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
            <NavLink className="hover:text-lime-300" to="/login">Login</NavLink>
        </li>
    </>

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