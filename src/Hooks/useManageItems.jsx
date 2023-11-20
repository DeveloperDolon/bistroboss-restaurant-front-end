import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useManageItems = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    return useQuery({
        queryKey: ['manage-items', user],
        queryFn: async () => {

            if(!user) {
                return [];
            }

            const rawData = await axiosSecure.get(`/api/v1/added-items?email=${user?.email}`);
            return rawData.data;
        }
    })
};

export default useManageItems;