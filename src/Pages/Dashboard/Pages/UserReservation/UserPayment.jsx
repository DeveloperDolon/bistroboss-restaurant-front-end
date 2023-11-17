import { FaCreditCard } from "react-icons/fa";


const UserPayment = () => {

    return (
        <div className="md:py-10 py-5 md:px-7 px-5 min-h-screen flex justify-center items-center">
            <div className="w-full">
                <h1 className="uppercase md:text-5xl text-3xl font-semibold text-center">Payment</h1>

                <form className="grid md:grid-cols-2 grid-cols-1 gap-7 w-full mt-16 2xl:w-[90%] mx-auto">
                    <div className="flex border rounded-lg items-center px-5">
                        <FaCreditCard className="md:text-4xl text-2xl text-gray-500"></FaCreditCard>
                        <input className="focus:border-none outline-none w-full px-5 md:py-5 py-3" type="text" required placeholder={`Card number`} />
                    </div>
                    <input className="border rounded-lg w-full px-5 md:py-5 py-3" type="text" required placeholder="MM/YY/CVC" />

                    <div className="flex md:col-span-2 justify-center w-full mt-6">
                        <button className="btn hover:text-black bg-[#570DF8] text-white px-32">Pay</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserPayment;