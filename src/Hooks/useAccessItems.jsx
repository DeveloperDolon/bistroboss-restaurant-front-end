import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAccessItems = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    return useQuery({
        queryKey: 'access-items',
        queryFn: async () => {
            
        }
    })
};

export default useAccessItems;