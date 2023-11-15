import PropTypes from "prop-types";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAccessCart from "../../Hooks/useAccessCart";

const CartItem = ({ data }) => {
    const {refetch} = useAccessCart();

    const handleRemove = () => {
        axiosSecure.delete(`/api/v1/carts/${data._id}`)
        .then((res => {
            if(res.data.deletedCount > 0) {
                toast.success("Item deleted successfully!");
                refetch();
            }
        })) 
        .catch(err => {
            toast.error(err.message);
        })
    }

    return (
        <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full" src={data?.product_image} alt="" />

            <div className="bg-[#fafafa] p-5 flex flex-col justify-between">
                <div>
                    <h1 className="cinzel-text font-semibold text-lg">{data?.product_name}</h1>
                    <p className="md:text-base text-sm font-bold">Price : $ {data?.product_price}</p>
                </div>

                <div className="mt-3">
                    <button onClick={handleRemove} className="btn text-xs hover:text-black btn-sm bg-red-500 rounded-md text-white">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
CartItem.propTypes = {
    data: PropTypes.object
}