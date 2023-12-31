import { useEffect, useState } from "react";
import SessionTItle from "../../../Component/SessionTItle";
import MenuItem from "./MenuItem";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";

const MenuSection = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axiosPublic.get("/api/v1/menus")
        .then(res => {
            const popularItems = res?.data?.filter(item => item.category === "popular")
            const sliceData = popularItems?.length > 6 ? popularItems?.slice(0, 6) : popularItems;
            setMenu(sliceData);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="md:my-28 my-20">
            <SessionTItle
            subTitle={"Check it out"}
            title={"From Our Menu"}
            ></SessionTItle>        

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10 max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
                {
                    menu?.map(item => <MenuItem key={item._id} data={item}></MenuItem>)
                }
            </div>

            <div className="text-center md:mt-20">
                <button className="btn bg-white border-x-0 border-t-0 border-black border-b-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default MenuSection;