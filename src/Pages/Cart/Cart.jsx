import { PacmanLoader } from "react-spinners";
import useAccessCart from "../../Hooks/useAccessCart";
import BannerCover from "../../Shared/BannerCover/BannerCover";
import bannerBg from "../../assets/home/banner.jpg"
import CartItem from "./CartItem";


const Cart = () => {

    const {data, isLoading} = useAccessCart();

    const totalPrice = data?.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.product_price;
    }, 0);
    
    return (
        <div>
            <BannerCover
            title={"Cart"}
            subtitle={"Your all added foods!"}
            image={bannerBg}
            ></BannerCover>

            {
                isLoading ? <div className="md:my-52 my-32 flex justify-center items-center"><PacmanLoader color="#36d7b7" /></div> : <>
                <div className="max-w-7xl md:my-28 my-24 mx-auto lg:px-0 md:px-5 px-3 grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    data?.map( item => <CartItem key={item._id} data={item}></CartItem>)
                }
                </div>

                <div>
                    <div className="divider divider-start w-full"></div>

                    <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 pb-16">
                        <h1 className="md:text-5xl text-3xl font-semibold">Total Price : $ {totalPrice}</h1>
                        <button className="btn bg-amber-600 text-white mt-5 hover:text-black">Order Now</button>
                    </div>
                </div>
                </>
            }
        </div>
    );
};

export default Cart;