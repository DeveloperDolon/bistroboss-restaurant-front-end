import useAccessCart from "../../Hooks/useAccessCart";
import BannerCover from "../../Shared/BannerCover/BannerCover";
import bannerBg from "../../assets/home/banner.jpg"
import CartItem from "./CartItem";


const Cart = () => {

    const {data} = useAccessCart();

    return (
        <div>
            <BannerCover
            title={"Cart"}
            subtitle={"Your all added foods!"}
            image={bannerBg}
            ></BannerCover>

            <div className="max-w-7xl md:my-28 my-24 mx-auto lg:px-0 md:px-5 px-3 grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    data?.map( item => <CartItem key={item._id} data={item}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Cart;