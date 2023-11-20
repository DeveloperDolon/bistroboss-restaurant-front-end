import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAccessAllUser = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    if(!user) {
        return [];
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["all-users", user],
        queryFn: async () => {
            const users = await axiosSecure.get(`/api/v1/users?email=${user.email}`);
            return users.data;
        }
    })
};

export default useAccessAllUser;