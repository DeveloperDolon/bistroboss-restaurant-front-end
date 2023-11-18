
import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const SocialLoginBtns = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state)

    const handleGoogleLogin = () => {

        const googleId = toast.loading('Login user...', {
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

        signInWithGoogle()
            .then((res) => {
                const data = res.user;
                const userInfo = {
                    email : data?.email,
                    name: data.displayName,
                    role: "User"
                }


                axiosSecure.post("/api/v1/users", userInfo)
                .then(res => console.log(res)).catch(err => console.log(err.message));

                toast.success('User logged in Successful!.', { id: googleId }, {
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
                navigate(location?.state || "/");
            }).catch(err => {
                toast.error(err.message, { id: googleId }, {
                    style: {
                        border: '1px solid black',
                        padding: '16px',
                        color: '#f87171',
                    },
                    iconTheme: {
                        primary: '#f87171',
                        secondary: '#FFFAEE',
                    },
                });
            })
    }

    return (
        <div className='flex justify-center gap-16 pt-2'>
            <button className='text-xl rounded-full  outline-2 outline outline-offset-8'><FaFacebookF /></button>
            <button onClick={handleGoogleLogin} className='text-xl rounded-full  outline-2 outline outline-offset-8'><FaGoogle /></button>
            <button className='text-xl rounded-full  outline-2 outline outline-offset-8'><FaGithub /></button>
        </div>
    );
};

export default SocialLoginBtns;