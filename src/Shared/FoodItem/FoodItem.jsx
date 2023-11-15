
import PropTypes from "prop-types";
import useAddCartProduct from "../../Hooks/useAddCartProduct";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const FoodItem = ({ data }) => {
    const {user} = useContext(AuthContext);
    
    const {mutate: addToCart} = useAddCartProduct();

    const handleAddToCart = () => {
        const {_id: product_id, name: product_name, image: product_image, price: product_price} = data;
        const userId = user.uid;
        const infos = {product_id, product_name, product_image, product_price, userId};
        addToCart(infos);
    };

    return (
        <div className="grid grid-cols-1 rounded-md overflow-hidden">
            <div>
                <img className="w-full h-full" src={data?.image} alt="" />
            </div>

            <div className="bg-slate-200 text-center py-8 px-5">
                <h1 className="md:text-2xl text-xl  font-bold">{data.name}</h1>
                <p className="mt-2">{data.recipe}</p>

                <div className="card-actions pt-5 justify-center">
                    <button onClick={handleAddToCart} className="btn text-[#BB8506] border-x-0 border-t-0  hover:bg-black hover:border-b-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                </div>

            </div>
        </div>
    );
};

export default FoodItem;

FoodItem.propTypes = {
    data: PropTypes.object
}