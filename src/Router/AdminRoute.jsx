
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PacmanLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { isAdmin, loading, user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    
    if (user && isAdmin) {
        return children;
    }

    if (loading) {
        return <div className="h-[calc(100vh-200px)] flex justify-center items-center">
            <PacmanLoader color="#36d7b7" />
        </div>
    }
    
    
    logOut()
        .then(() => {
            toast.success('User logged out Successful!.', {
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