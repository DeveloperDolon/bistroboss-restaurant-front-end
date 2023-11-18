import { FaHome } from "react-icons/fa";
import errImg from "../../assets/404.GIF"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img className="w-[50%]" src={errImg} alt="" />

            <Link
                to={"/"}
                style={{
                    background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                }}
                className="flex btn justify-center items-center gap-2 text-white px-7">
                Back To Home <FaHome className="md:text-xl text-lg"></FaHome>
            </Link>
        </div>
    );
};

export default ErrorPage;