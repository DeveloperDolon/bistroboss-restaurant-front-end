import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const useAccessCart = () => {
    const {user} = useContext(AuthContext);



    return useQuery({
        queryKey: ["cart"],
        queryFn : async () => {
            const cartData = await axiosSecure.get(`/api/v1/cart?userId=${user?.uid}`);
            const datas = await cartData.data;
            return datas;
        }
    })
};

export default useAccessCart;