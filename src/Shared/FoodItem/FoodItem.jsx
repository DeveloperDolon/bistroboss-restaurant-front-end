import PropTypes from "prop-types";

const FoodItem = ({ data }) => {
    return (
        <div className="grid grid-cols-1 rounded-md overflow-hidden">
            <div>
                <img className="w-full h-full" src={data?.image} alt="" />
            </div>

            <div className="bg-slate-200 text-center py-8 px-5">
                <h1 className="md:text-2xl text-xl  font-bold">{data.name}</h1>
                <p className="mt-2">{data.recipe}</p>

                <div className="card-actions pt-5 justify-center">
                    <button className="btn text-[#BB8506] border-x-0 border-t-0  hover:bg-black hover:border-b-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                </div>

            </div>
        </div>
    );
};

export default FoodItem;

FoodItem.propTypes = {
    data: PropTypes.object
}