import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import toast from "react-hot-toast";

export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {
    const { logOut, user, token } = useContext(AuthContext);
    
    // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
            const customToken = token ? token : localStorage.getItem('access-token');
            config.headers.authorization = `Bearer ${customToken}`;
            return config;
        // console.log('request stopped by interceptors', token)
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            if (user && token) {
                logOut()
                    .then(() => {
                        localStorage.removeItem('access-token');
                        toast.success("User logged out!");
                        window.location.href = "http://localhost:5173/login";
                    }).catch(err => {
                        toast.error(err.message)
                    })
            } else {
                return Promise.reject(error);
            }
            
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;