import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const usePaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    return useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/payments?email=${user?.email}`)
            return res.data;
        }
    })
};

export default usePaymentHistory;