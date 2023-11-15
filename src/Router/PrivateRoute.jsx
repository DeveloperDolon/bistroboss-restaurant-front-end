import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PacmanLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading, user } = useContext(AuthContext);

    if(user) {
        return children;
    }

    if(loading) {
        return <div className="h-[calc(100vh-200px)] flex justify-center items-center">
            <PacmanLoader color="#36d7b7" />
        </div>
    }

    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}