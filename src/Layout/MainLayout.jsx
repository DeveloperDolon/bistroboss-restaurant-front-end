import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {

    const navItems = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/menu">Our Menu</NavLink>
        </li>
        <li>
            <NavLink to="/shop">Our Shop</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="bg-black bg-opacity-50 text-white fixed top-0 w-full z-50">
                        <div className="w-full navbar max-w-7xl mx-auto font-bold">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 grid grid-cols-1">
                                <h2 className="cinzel-text uppercase md:text-2xl text-xl font-bold">Bistro Boss</h2>
                                <p className="uppercase cinzel-text md:tracking-[7px] tracking-[5px] md:text-base text-sm"><span className="md:text-xl text-lg cinzel-text">R</span>estaurant</p>
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
                </div>
                <div className="drawer-side">
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