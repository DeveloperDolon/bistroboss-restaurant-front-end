import PropTypes from "prop-types";

const CartItem = ({data}) => {
    return (
        <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full" src={data?.product_image} alt="" />

            <div className="bg-[#fafafa] p-5">
                <h1 className="cinzel-text font-semibold text-lg">{data?.product_name}</h1>
                <p className="md:text-base text-sm font-bold">Price : $ {data?.product_price}</p>
            </div>
        </div>
    );
};

export default CartItem;
CartItem.propTypes = {
    data: PropTypes.object
}