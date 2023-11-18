import { useContext } from "react";
import { FaCalendar, FaCartArrowDown, FaPhone, FaStar, FaWallet } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { AuthContext } from "../../../../Provider/AuthProvider";

const UserHome = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="md:py-10 py-5 md:px-7 px-5">
            <h1 className="cinzel-text font-semibold md:text-3xl text-xl">Hi, Welcome Back</h1>
            <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-10 gap-8">
                <div
                    style={{
                        background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaWallet className="sm:text-5xl text-4xl"></FaWallet>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">1000</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Revenue</h3>
                    </div>
                </div>

                <div
                    style={{
                        background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaPeopleGroup className="sm:text-5xl text-4xl"></FaPeopleGroup>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">1500</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Customers</h3>
                    </div>
                </div>

                <div
                    style={{
                        background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaPhone className="sm:text-5xl text-4xl"></FaPhone>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">03</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Contact</h3>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-28 rounded-md">
                <div className="bg-[#FFEDD5] border-r border-[#D1A054] flex justify-center items-center py-16 flex-col px-20 rounded-l-md">
                    <div className="w-full">
                        <img src={user?.photoURL} className="border-4 mx-auto w-[40%] border-[#D1A054] rounded-full" alt="" />
                    </div>

                    <h1 className="md:text-2xl text-lg font-bold cinzel-text mt-5">{user?.displayName}</h1>
                </div>

                <div className="bg-[#FEF9C3] border-l border-[#D1A054] flex justify-center items-center py-16 px-20 rounded-r-md">
                    <div>
                        <h1 className="cinzel-text md:text-3xl text-base font-semibold whitespace-nowrap">Your Activities</h1>

                        <div className="mt-7 space-y-3">
                            <p className="cinzel-text font-semibold md:text-xl flex gap-3 items-center text-lg text-[#0088FE]"><FaCartArrowDown></FaCartArrowDown> Orders: 5</p>
                            <p className="cinzel-text font-semibold md:text-xl flex gap-3 items-center text-lg text-[#00C4A1]"><FaStar></FaStar> Reviews: 5</p>
                            <p className="cinzel-text font-semibold md:text-xl flex gap-3 items-center text-lg text-[#FFBB28]"><FaCalendar></FaCalendar> Bookings: 5</p>
                            <p className="cinzel-text font-semibold md:text-xl flex gap-3 items-center text-lg text-[#FF8042]"><FaWallet></FaWallet> Payment: 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;