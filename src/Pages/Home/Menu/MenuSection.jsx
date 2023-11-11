import { useEffect, useState } from "react";
import SessionTItle from "../../../Component/SessionTItle";
import axios from "axios";
import MenuItem from "./MenuItem";

const MenuSection = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get("/menu.json")
        .then(res => {
            const sliceData = res?.data?.length > 6 ? res?.data?.slice(0, 6) : res?.data;
            setMenu(sliceData);
        })
        .catch(err => console.error(err));
    }, [])

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