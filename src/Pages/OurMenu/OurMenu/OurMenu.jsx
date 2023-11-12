import { useEffect, useState } from "react";
import BannerCover from "../../../Shared/BannerCover/BannerCover";
import image from "../../../assets/menu/banner3.jpg";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import TodaysOffer from "../Offers/TodaysOffer";

const Menus = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        axiosSecure.get("/api/v1/menus")
            .then(res => {
                setMenus(res.data);
            }).catch(err => console.log(err.message));
    }, []);

    const offers = menus.filter(menu => menu.category === "offered");
    const salads = menus.filter(menu => menu.category === "salad");
    const soups = menus.filter(menu => menu.category === "soup");
    const pizzas = menus.filter(menu => menu.category === "pizza");
    const desserts = menus.filter(menu => menu.category === "dessert");

    return (
        <div>
            <BannerCover
                image={image}
                title={"Our Menu"}
                subtitle={"Would you like to try a dish?"}
            ></BannerCover>

            <TodaysOffer data={offers}></TodaysOffer>
        </div>
    );
};

export default Menus;