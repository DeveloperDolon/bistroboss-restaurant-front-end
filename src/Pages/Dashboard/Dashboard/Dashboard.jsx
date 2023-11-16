import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (

        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen overflow-y-auto pt-10 px-10">
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

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;