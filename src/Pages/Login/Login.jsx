
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import LoginBg from "../../assets/others/authentication.png";
import logINBanner from "../../assets/others/authentication2.png";
import { useEffect, useRef, useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [disable, setDisabled] = useState(true);
    const captchaRef = useRef();
    const {signIn} = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {

        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const loginId = toast.loading('Login user...', {
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
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
        .then(() => {
            toast.success('User logged in Successful!.', {id: loginId}, {
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
        }).catch(err => {
            toast.error(err.message, {id: loginId}, {
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
        <div
            className="min-h-screen flex justify-center items-center"
            style={{
                background: `url("${LoginBg}") no-repeat center center`,
                backgroundSize: "cover",
            }}>
            <div className="max-w-[2000px] mx-auto md:p-20 sm:p-11 p-3 shadow-2xl grid md:grid-cols-2 grid-cols-1 gap-6 items-center md:my-20">
                <div>
                    <img src={logINBanner} alt="" />
                </div>

                <div className="">
                    <h1 className="md:text-4xl text-2xl font-bold text-center">Login</h1>

                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-6 mt-8">
                        <label className="text-lg font-semibold" htmlFor="email">Email
                            <input className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" type="email" name='email' required placeholder="Type email" />
                        </label>

                        <label className="text-lg font-semibold" htmlFor="email">Password
                            <input className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" name='password' type="password" required placeholder="Type password" />
                        </label>
                        <div className="form-control">
                            <label>
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <div className='flex gap-4 justify-between items-center'>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha above" className="text-base font-normal w-full py-5 pl-7 rounded-md mt-4" />
                                <div className='flex items-center'>
                                    <span onClick={handleValidateCaptcha} className='btn bg-red-400 text-white btn-sm whitespace-nowrap hover:text-black text-xs'>Submit Captcha</span>
                                </div>
                            </div>
                        </div>

                        <input className='w-full rounded-md bg-[#D1A054B2] text-white block mb-16 py-5 font-bold md:text-lg text-base cursor-pointer disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed' disabled={disable} type="submit" value="Sign In" />
                    </form>

                    <div>
                        <p className='md:text-base text-sm text-center'>New Here? <Link to="/register" className='font-semibold'>Create a New Account</Link></p>

                        <p className='font-bold md:text-base text-sm text-center my-3'>Or sing in with</p>

                        <div className='flex justify-center gap-16 pt-2'>
                            <button className='text-xl rounded-full  outline-2 outline outline-offset-8'><FaFacebookF /></button>
                            <button className='text-xl rounded-full  outline-2 outline outline-offset-8'><FaGoogle /></button>
                            <button className='text-xl rounded-full  outline-2 outline outline-offset-8'><FaGithub /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;