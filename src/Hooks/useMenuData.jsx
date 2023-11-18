import { useEffect, useState } from "react";
import { axiosPublic } from "./useAxiosPublic";

const useMenuData = () => {
    const [loading, setLoading] = useState(true);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosPublic.get("/api/v1/menus")
        .then(res => {
            setMenus(res.data);
            setLoading(false);
        }).catch(err => console.log(err.message));
    }, [])

    return {menus, loading};
};

export default useMenuData;