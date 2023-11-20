import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAccessCart = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure(); 

    return useQuery({
        queryKey: ["cart", user],
        queryFn: async () => {
            if(!user) {
                return [];
            }

            const cartData = await axiosSecure.get(`/api/v1/cart?userEmail=${user?.email}`);
            const datas = await cartData.data;
            return datas;

        }
    })
};

export default useAccessCart;