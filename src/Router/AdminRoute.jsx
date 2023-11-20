
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PacmanLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosPublic } from "../Hooks/useAxiosPublic";

const AdminRoute = ({ children }) => {
    const [admin, setAdmin] = useState(true);
    const { loading, user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    if(user) {
        axiosPublic.get(`/api/v1/user?email=${user?.email}`)
                    .then(res => {
                        if (res?.data?.role === "Admin") {
                            setAdmin(res?.data?.role === "Admin");
                            console.log("Checking permissions", res?.data?.role === "Admin");
                        }
                    })
                    .catch(err => console.log(err.message))
    }

    if (admin && user) {
        return children;
    }

    if (loading) {
        return <div className="h-[calc(100vh-200px)] flex justify-center items-center">
            <PacmanLoader color="#36d7b7" />
        </div>
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
            navigate("/login");

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