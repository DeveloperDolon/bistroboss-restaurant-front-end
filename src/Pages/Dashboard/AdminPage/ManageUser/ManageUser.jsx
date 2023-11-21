import { FaTrash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SessionTItle from "../../../../Component/SessionTItle";
import useAccessAllUser from "../../../../Hooks/userAccessAllUser";
import { RiAdminFill } from "react-icons/ri";


const ManageUser = () => {
    const {data} = useAccessAllUser();

    return (
        <div className="md:py-10 py-5 bg-[#fafafa]">
            <SessionTItle
                subTitle={"How Many?"}
                title={"Manage All Users"}
            ></SessionTItle>

            <div className="md:px-7 px-5 md:mt-20 mt-10 mb-28">
                <div className="bg-white 2xl:w-[80%] mx-auto w-full md:px-14 sm:px-8 px-1 md:py-14 py-8 rounded-lg shadow-md">
                    <div className="flex justify-between flex-wrap sm:gap-0 gap-5">
                        <h1 className="md:text-3xl text-xl font-bold cinzel-text">Total Users : {data?.length}</h1>
                    </div>

                    <table className="table w-full relative border md:rounded-t-2xl rounded-lg overflow-hidden bg-white mt-12">
                        {/* head */}
                        <thead className=" bg-[#D1A054] py-6 w-full">
                            <tr className="uppercase">
                                <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light "></th>
                                <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">Name</th>
                                <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">Email</th>
                                <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">Role</th>
                                <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((user, idx) =>
                                    <tr key={user?._id}>
                                        <td className="py-5 font-bold md:text-base text-xs">
                                            {idx + 1}
                                        </td>
                                        <td className="py-5 md:text-base text-xs">
                                           {user?.name}
                                        </td>
                                        <td className="py-5 md:text-base text-xs">
                                            {user?.email}
                                        </td>
                                        <td className="py-5 md:text-base text-xs">

                                            {
                                                user?.role === "Admin" ? 
                                                <Link>
                                                <button className="md:text-white text-white md:bg-[#D1A054] md:btn btn-sm bg-[#D1A054] rounded-lg hover:text-black">
                                                    <RiAdminFill></RiAdminFill>
                                                </button>
                                            </Link>
                                                :  <Link>
                                                <button className="md:text-white text-white md:bg-[#D1A054] md:btn btn-sm bg-[#D1A054] rounded-lg hover:text-black">
                                                    <FaUser></FaUser>
                                                </button>
                                            </Link>
                                            }
                                        </td>
                                        <td className="py-5 md:text-base text-xs">
                                            <button onClick={() => handleDeleteItem(user?._id)} className="md:text-white text-white md:bg-red-600 md:btn btn-sm bg-red-600 rounded-lg hover:text-black">
                                                <FaTrash></FaTrash>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;