
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PacmanLoader } from "react-spinners";
import toast from "react-hot-toast";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import { useState } from "react";

const AdminRoute = ({ children }) => {
    const [adminLoading, setAdminLoading] = useState(true);
    const { isAdmin, loading, user, logOut } = useContext(AuthContext);

    if (user) {
        axiosPublic.get(`/api/v1/user?email=${user?.email}`)
            .then(res => {
                if (res?.data?.role === "Admin") {
                    setAdminLoading(false);
                    return children;
                }
                setAdminLoading(false);
            })
            .catch(err => console.log(err.message))
    }


    if (loading || adminLoading) {
        return <div className="h-[calc(100vh-200px)] flex justify-center items-center">
            <PacmanLoader color="#36d7b7" />
        </div>
    }

    if (isAdmin && user) {
        return children;
    }

    logOut()
        .then(() => {
            toast.success('User logged out!.', {
                style: {
                    border: '1px solid black',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: '#D1A054B2',
                    secondary: '#FFFAEE',
                },
            });
            window.location.href = "http://localhost:5173/login";

        })
        .catch(err => {
            toast.error(err.message, {
                style: {
                    border: '1px solid black',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: '#D1A054B2',
                    secondary: '#FFFAEE',
                },
            });
        })
};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node
}