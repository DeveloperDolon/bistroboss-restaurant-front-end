import BannerCover from "../../../Shared/BannerCover/BannerCover";
import shopBg from "../../../assets/shop/banner2.jpg";
const OurShop = () => {
    return (
        <div>
            <BannerCover
            image={shopBg}
            title={"Our Shop"}
            subtitle={"Would you like to try a dish?"}
            ></BannerCover>

            <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
                Hello world
            </div>
        </div>
    );
};

export default OurShop;