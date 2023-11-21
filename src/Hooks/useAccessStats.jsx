import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAccessStats = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure(); 

    return useQuery({
        queryKey: ["admin-stats", user],
        queryFn: async () => {
            if(!user) {
                return [];
            }

            const statsData = await axiosSecure.get(`/api/v1/admin-stats?email=${user?.email}`);
            const datas = await statsData.data;
            return datas;
        }
    })
};

export default useAccessStats;