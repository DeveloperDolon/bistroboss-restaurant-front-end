import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useMenuData = () => {
    const [loading, setLoading] = useState(true);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosSecure.get("/api/v1/menus")
        .then(res => {
            setMenus(res.data);
            setLoading(false);
        }).catch(err => console.log(err.message));
    }, [])

    return {menus, loading};
};

export default useMenuData;