import { FaTrash } from "react-icons/fa";
import SessionTItle from "../../../../Component/SessionTItle";
import useAccessCart from "../../../../Hooks/useAccessCart";
import { axiosSecure } from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const UserCart = () => {

    const { data, refetch } = useAccessCart();

    const totalPrice = data?.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.product_price;
    }, 0);

    const handleRemoveItem = (id) => {
        axiosSecure.delete(`/api/v1/carts/${id}`)
            .then((res => {
                if (res.data.deletedCount > 0) {
                    toast.success("Item deleted successfully!");
                    refetch();
                }
            }))
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div className="md:py-10 py-5 bg-[#fafafa]">
            <SessionTItle
                subTitle={"My Cart"}
                title={"Wanna Add More?"}
            ></SessionTItle>

            <div className="md:px-7 px-5 md:mt-20 mt-10 mb-28">
                <div className="bg-white 2xl:w-[80%] mx-auto w-full md:px-14 sm:px-8 px-1 md:py-14 py-8 rounded-lg shadow-md">
                    <div className="flex justify-between flex-wrap sm:gap-0 gap-5">
                        <h1 className="md:text-3xl text-xl font-bold cinzel-text">Total Orders : {data?.length}</h1>

                        <h1 className="md:text-3xl text-xl font-bold cinzel-text">Total Price : ${totalPrice > 0 ? totalPrice : 0}</h1>


                        {
                            data?.length ? <Link to="/dashboard/reservation/user-payment">
                                <button className="btn bg-[#D1A054] text-white hover:text-black">
                                    Pay
                                </button>
                            </Link> :
                                <button disabled className="btn bg-[#D1A054] text-white hover:text-black">
                                    Pay
                                </button>
                        }
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
                                            <img className="md:w-40 w-20 rounded-md" src={food?.product_image} alt="" />
                                        </td>
                                        <td className="py-5 md:text-base text-xs">
                                            {food?.product_name}
                                        </td>
                                        <td className="py-5 md:text-base text-xs">
                                            ${food?.product_price}
                                        </td>
                                        <td className="py-5 md:text-base text-xs">
                                            <button onClick={() => handleRemoveItem(food?._id)} className="md:text-white text-white md:bg-red-600 md:btn btn-sm bg-red-600 rounded-lg hover:text-black">
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

export default UserCart;