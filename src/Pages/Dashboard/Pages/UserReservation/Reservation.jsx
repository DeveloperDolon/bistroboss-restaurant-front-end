import { FaCalendarAlt } from "react-icons/fa";
import SessionTItle from "../../../../Component/SessionTItle";
import { TbPhoneCall } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Reservation = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/dashboard/reservation/user-payment");
    }

    return (
        <div className="md:py-10 py-5 md:px-7 px-5">
            <SessionTItle
                subTitle={"Reservation"}
                title={"Book A Table"}
            ></SessionTItle>

            <form className="md:my-20 my-16">
                <div className="grid 2xl:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
                    <label htmlFor="date"><span className="font-semibold md:text-lg text-base">Date*</span>
                        <input className="block w-full border py-5 px-5 rounded-lg mt-2" name="date" type="date" required />
                    </label>

                    <label htmlFor="time"><span className="font-semibold md:text-lg text-base">Time*</span>
                        <input className="block w-full border py-5 px-5 rounded-lg mt-2" name="time" required type="time" />
                    </label>

                    <label htmlFor="guest"><span className="font-semibold md:text-lg text-base">Guest*</span> (Number of person)
                        <input className="block w-full border py-5 px-5 rounded-lg mt-2" name="guest" required type="number" defaultValue={1} max={10} min={1} />
                    </label>

                    <label htmlFor="name"><span className="font-semibold md:text-lg text-base">Name*</span>
                        <input className="block w-full border py-5 px-5 rounded-lg mt-2" name="name" required type="text" placeholder="Your Name" />
                    </label>

                    <label htmlFor="phone"><span className="font-semibold md:text-lg text-base">Phone*</span>
                        <input className="block w-full border py-5 px-5 rounded-lg mt-2" name="phone" required type="text" placeholder="Phone Number" />
                    </label>

                    <label htmlFor="email"><span className="font-semibold md:text-lg text-base">Email*</span>
                        <input className="block w-full border py-5 px-5 rounded-lg mt-2" name="email" required type="email" placeholder="Email" />
                    </label>
                </div>

                <div className="text-center flex justify-center md:mt-10 mt-6">
                    <button
                        onClick={handleClick}
                        style={{
                            background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                        }}
                        className="flex btn justify-center items-center gap-2 text-white px-7">
                        Book A Table <FaCalendarAlt></FaCalendarAlt>
                    </button>
                </div>
            </form>

            <SessionTItle
                subTitle={"Visit Us"}
                title={"Our Location"}
            ></SessionTItle>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-16 md:mb-32 mb-20">
                <div className="bg-white">
                    <div className="bg-[#D1A054] text-white flex justify-center items-center py-5 text-4xl rounded-sm ">
                        <TbPhoneCall></TbPhoneCall>
                    </div>

                    <div className="bg-[#F3F3F3] flex justify-center items-center flex-col py-12">
                        <h2 className="text-3xl font-semibold mb-3">PHONE</h2>
                        <p>+88 01856912067</p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="bg-[#D1A054] text-white flex justify-center items-center py-5 text-4xl rounded-sm ">
                        <FaLocationDot />
                    </div>

                    <div className="bg-[#F3F3F3] flex justify-center items-center flex-col py-12">
                        <h2 className="text-3xl font-semibold mb-3">Address</h2>
                        <p>+88 01856912067</p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="bg-[#D1A054] text-white flex justify-center items-center py-5 text-4xl rounded-sm ">
                        <IoTime />
                    </div>

                    <div className="bg-[#F3F3F3] flex justify-center items-center flex-col py-12">
                        <h2 className="text-3xl font-semibold mb-3">WORKING HOURS</h2>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;