import { FaEdit, FaTrash } from "react-icons/fa";
import SessionTItle from "../../../../Component/SessionTItle";
import useManageItems from "../../../../Hooks/useManageItems";


const AddedItems = () => {
    const {data} = useManageItems();
    
    return (
        <div className="md:py-10 py-5 bg-[#fafafa]">
        <SessionTItle
            subTitle={"My Cart"}
            title={"Wanna Add More?"}
        ></SessionTItle>

        <div className="md:px-7 px-5 md:mt-20 mt-10 mb-28">
            <div className="bg-white 2xl:w-[80%] mx-auto w-full md:px-14 sm:px-8 px-1 md:py-14 py-8 rounded-lg shadow-md">
                <div className="flex justify-between flex-wrap sm:gap-0 gap-5">
                    <h1 className="md:text-3xl text-xl font-bold cinzel-text">Total Items : {data?.length}</h1>
                </div>

                <table className="table w-full relative border md:rounded-t-2xl rounded-lg overflow-hidden bg-white mt-12">
                    {/* head */}
                    <thead className=" bg-[#D1A054] py-6 w-full">
                        <tr className="uppercase">
                            <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light "></th>
                            <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">item image</th>
                            <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">item name</th>
                            <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">Price</th>
                            <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">action</th>
                            <th className="py-8 uppercase text-white md:text-base text-xs sm:font-semibold font-light ">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((food, idx) =>
                                <tr key={food?._id}>
                                    <td className="py-5 font-bold md:text-base text-xs">
                                        {idx + 1}
                                    </td>
                                    <td className="py-5 md:text-base text-xs">
                                        <img className="md:w-40 w-20 rounded-md" src={food?.image} alt="" />
                                    </td>
                                    <td className="py-5 md:text-base text-xs">
                                        {food?.name}
                                    </td>
                                    <td className="py-5 md:text-base text-xs">
                                        ${food?.price}
                                    </td>
                                    <td className="py-5 md:text-base text-xs">
                                        <button className="md:text-white text-white md:bg-[#D1A054] md:btn btn-sm bg-[#D1A054] rounded-lg hover:text-black">
                                            <FaEdit></FaEdit>
                                        </button>
                                    </td> 
                                    <td className="py-5 md:text-base text-xs">
                                        <button className="md:text-white text-white md:bg-red-600 md:btn btn-sm bg-red-600 rounded-lg hover:text-black">
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

export default AddedItems;