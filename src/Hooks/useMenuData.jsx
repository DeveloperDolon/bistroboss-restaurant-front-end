import { useEffect, useState } from "react";
import { axiosPublic } from "./useAxiosPublic";

const useMenuData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axiosPublic.get("/api/v1/menus")
        .then(res => {
            setMenus(res.data);
            setIsLoading(false);
        }).catch(err => console.log(err.message));
    }, [])

    return {menus, isLoading};
};

export default useMenuData;