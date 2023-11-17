import SessionTItle from "../../../../Component/SessionTItle";


const PaymentHistory = () => {
    const myFoods = [1, 2, 3, 4, 5];
    return (
        <div className="md:py-10 py-5 min-h-screen bg-[#fafafa]">
            <SessionTItle
                subTitle={"At a Glance!"}
                title={"Payment History"}
            ></SessionTItle>

            <div className="md:px-7 px-5 md:mt-20 mt-10 mb-28">
                <div className="bg-white 2xl:w-[80%] mx-auto w-full md:px-14 px-8 md:py-14 py-8 rounded-lg shadow-md">
                    <h1 className="md:text-4xl text-2xl font-bold cinzel-text">Total Payments : 6</h1>

                    <div className="mt-10">
                        <table className="table w-full relative border md:rounded-t-2xl rounded-lg overflow-hidden">
                            {/* head */}
                            <thead className=" bg-[#D1A054] py-6 w-full">
                                <tr className="uppercase">
                                    <th className="py-8 uppercase text-white md:text-base text-sm">email</th>
                                    <th className="py-8 uppercase text-white md:text-base text-sm">category</th>
                                    <th className="py-8 uppercase text-white md:text-base text-sm">Total Price</th>
                                    <th className="py-8 uppercase text-white md:text-base text-sm">Payment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    myFoods.length > 0 ? <>
                                        {
                                            myFoods?.map(food => <>
                                                <tr>
                                                    <td className="py-5 md:text-base text-xs">
                                                        info@gmail.com{food}
                                                    </td>
                                                    <td className="py-5 md:text-base text-xs">
                                                        Food Order
                                                    </td>
                                                    <td className="py-5 md:text-base text-xs">
                                                        $567
                                                    </td>
                                                    <td className="py-5 md:text-base text-xs">
                                                        Monday, April 10, 2023
                                                    </td>
                                                </tr>
                                            </>)
                                        } </> :
                                        ""
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;