
import { useContext } from "react";
import LoginBg from "../../assets/others/authentication.png";
import logINBanner from "../../assets/others/authentication2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {

        const registerId = toast.loading('Registering user...', {
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

        createUser(data.email, data.password)
            .then(() => {
                toast.success('Look at my styles.', {id: registerId}, {
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
                toast.error(err.message, {id: registerId}, {
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
    }

    return (
        <div>
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
                        <h1 className="md:text-4xl text-2xl font-bold text-center">Register</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 mt-8">
                            <label className="text-lg font-semibold" htmlFor="email">Name
                                <input {...register("name", { required: true })} className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" type="text" placeholder="Type name" />
                                {errors.name && <span className="text-sm text-red-500">Name is required!</span>}
                            </label>

                            <label className="text-lg font-semibold" htmlFor="email">Email
                                <input {...register("email", { required: true })} className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" type="email" placeholder="Type email" />
                                {errors.email && <span className="text-sm text-red-500">Email is required!</span>}
                            </label>

                            <label className="text-lg font-semibold" htmlFor="password">Password
                                <input {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, })} className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" type="password" placeholder="Type name" />
                                {errors?.password?.type === "required" && <span className="text-sm text-red-500">Password is required!</span>}
                                {errors?.password?.type === "maxLength" && <span className="text-sm text-red-500">Password can&apos;t be more then 20 character!</span>}
                                {errors?.password?.type === "minLength" && <span className="text-sm text-red-500">Password must be 6 character length!</span>}
                                {errors?.password?.type === "pattern" && <span className="text-sm text-red-500">Password must have one uppercase, one lowercase, one number and one special character!</span>}
                            </label>

                            <input className='w-full rounded-md bg-[#D1A054B2] text-white block mb-16 py-5 font-bold md:text-lg text-base cursor-pointer disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed' type="submit" value="Register" />
                        </form>

                        <div>
                            <p className='md:text-base text-sm text-center'>Already registered? <Link to="/login" className='font-semibold'>Go to log in</Link></p>

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
        </div>
    );
};

export default Register;