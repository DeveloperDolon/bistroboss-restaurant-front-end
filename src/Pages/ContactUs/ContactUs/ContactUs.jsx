import SessionTItle from "../../../Component/SessionTItle";
import BannerCover from "../../../Shared/BannerCover/BannerCover";
import bannerImg from "../../../assets/contact/banner.jpg";
import { TbPhoneCall } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="md:mb-64 mb-52">
            <BannerCover
                image={bannerImg}
                title={"Contact Us"}
                subtitle={"Would you like to try a dish?"}
            ></BannerCover>


            <div className="md:my-32 my-20">
                <SessionTItle
                    subTitle={"Visit Us"}
                    title={"Our Location"}
                ></SessionTItle>

                <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white border">
                        <div className="bg-[#D1A054] text-white flex justify-center items-center py-5 text-4xl rounded-sm ">
                            <TbPhoneCall></TbPhoneCall>
                        </div>

                        <div className="bg-[#F3F3F3] mx-5 mb-5 flex justify-center items-center flex-col py-12">
                            <h2 className="text-3xl font-semibold mb-3">PHONE</h2>
                            <p>+88 01856912067</p>
                        </div>
                    </div>

                    <div className="bg-white border">
                        <div className="bg-[#D1A054] text-white flex justify-center items-center py-5 text-4xl rounded-sm ">
                            <FaLocationDot />
                        </div>

                        <div className="bg-[#F3F3F3] mx-5 mb-5 flex justify-center items-center flex-col py-12">
                            <h2 className="text-3xl font-semibold mb-3">Address</h2>
                            <p>+88 01856912067</p>
                        </div>
                    </div>

                    <div className="bg-white border">
                        <div className="bg-[#D1A054] text-white flex justify-center items-center py-5 text-4xl rounded-sm ">
                            <IoTime />
                        </div>

                        <div className="bg-[#F3F3F3] mx-5 mb-5 flex justify-center items-center flex-col py-12">
                            <h2 className="text-3xl font-semibold mb-3">WORKING HOURS</h2>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SessionTItle
                    subTitle={"Send Us a Message"}
                    title={"Contact Form"}
                ></SessionTItle>

                <div className="max-w-7xl mx-auto md:p-24 p-10 bg-[#F3F3F3] rounded-sm mt-10">
                    <form className="grid grid-cols-1 gap-6">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <label htmlFor="name">Name
                                <input className="w-full py-5 pl-6 mt-3 rounded-lg" type="text" name="name" required placeholder="Enter your name" />
                            </label>

                            <label htmlFor="email">Email
                                <input className="w-full py-5 pl-6 mt-3 rounded-lg" type="email" name="email" required placeholder="Enter your email" />
                            </label>
                        </div>

                        <label htmlFor="phone">Phone
                            <input className="w-full py-5 pl-6 mt-3 rounded-lg" type="text" name="phone" placeholder="Enter your phone number" required />
                        </label>

                        <label htmlFor="message">Message
                            <textarea className="w-full py-5 pl-6 mt-3 rounded-lg" name="message" placeholder="Write your message here" id="" cols="30" rows="10"></textarea>
                        </label>
                    </form>

                    <div className="mt-7">
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                    </div>

                    <button 
                    style={{
                        background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                    }}
                    className="btn mx-auto bg-red-50 px-7 text-white capitalize flex justify-center gap-2 rounded-sm mt-28">
                        Send Message
                        <IoIosSend className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;