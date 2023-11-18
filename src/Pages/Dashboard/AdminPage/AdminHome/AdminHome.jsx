import { FaWallet } from "react-icons/fa";
import { FaBowlFood, FaPeopleGroup, FaVanShuttle } from "react-icons/fa6";
import Chart from "react-google-charts";

const AdminHome = () => {
    const data = [
        ["Sold", "Quantity"],
        ["Pizza", 1000],
        ["Desert", 1170],
        ["Soups", 660],
        ["Drinks", 1030],
    ];

    const options = {
        colors: ["#b0120a", "#ffab91"],
      };

    return (
        <div className="md:py-10 py-5 md:px-7 px-5">
            <h1 className="cinzel-text font-semibold md:text-3xl text-xl">Hi, Welcome Back</h1>
            <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-10 gap-8">
                <div
                    style={{
                        background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaWallet className="sm:text-5xl text-4xl"></FaWallet>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">1000</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Revenue</h3>
                    </div>
                </div>

                <div
                    style={{
                        background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaPeopleGroup className="sm:text-5xl text-4xl"></FaPeopleGroup>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">1500</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Customers</h3>
                    </div>
                </div>

                <div
                    style={{
                        background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaBowlFood className="sm:text-5xl text-4xl"></FaBowlFood>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">103</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Product</h3>
                    </div>
                </div>

                <div
                    style={{
                        background: "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)",
                    }}
                    className="flex items-center justify-center rounded-lg text-white px-10 py-10 gap-8">
                    <FaVanShuttle className="sm:text-5xl text-4xl"></FaVanShuttle>

                    <div>
                        <h1 className="sm:text-5xl text-3xl font-bold">500</h1>
                        <h3 className="sm:text-2xl text-lg font-semibold">Orders</h3>
                    </div>
                </div>
            </div>
            {/* TODO: There is a chart for admin panel */}
            <div className="grid 2xl:grid-cols-2 grid-cols-1 mt-16">
                <Chart
                    options={options}
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data}
                />

                <Chart
                    chartType="PieChart"
                    data={data}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
        </div>
    );
};

export default AdminHome;