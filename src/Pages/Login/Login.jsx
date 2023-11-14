
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import LoginBg from "../../assets/others/authentication.png";
import logINBanner from "../../assets/others/authentication2.png";
import { useEffect, useState } from 'react';

const Login = () => {
    const [disable, setDisabled] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div
        className="min-h-screen flex justify-center items-center"
        style={{
            background: `url("${LoginBg}") no-repeat center center`,
            backgroundSize: "cover",
        }}>
            <div className="max-w-[2000px] mx-auto md:p-20 p-11 shadow-2xl grid md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <img src={logINBanner} alt="" />
                </div>

                <div className="">
                    <h1 className="md:text-4xl text-2xl font-bold text-center">Login</h1>

                    <form className="grid grid-cols-1 gap-6 mt-8">
                        <label className="text-lg font-semibold" htmlFor="email">Email
                            <input className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" type="email" required placeholder="Type email" />
                        </label>
                        
                        <label className="text-lg font-semibold" htmlFor="email">Password
                            <input className="text-base font-normal w-full py-5 pl-7 rounded-md mt-3" type="password" required placeholder="Type name" />
                        </label>
                        <div className="form-control">
                                <label>
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above" className="text-base font-normal w-full py-5 pl-7 rounded-md mt-4" />
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;