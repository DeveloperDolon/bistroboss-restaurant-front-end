import BannerCover from "../../../Shared/BannerCover/BannerCover";
import image from "../../../assets/menu/banner3.jpg";

const Menus = () => {
    return (
        <div>
            <BannerCover 
            image={image}
            title={"Our Menu"}
            subtitle={"Would you like to try a dish?"}
            ></BannerCover>
        </div>
    );
};

export default Menus;