
import salad from "../../../assets/menu/salad-bg.jpg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import desert from "../../../assets/menu/dessert-bg.jpeg";

const ChefRecommends = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="card card-compact shadow-xl bg-[#fafafa]">
                <figure><img src={salad} alt="Shoes" /></figure>
                <div className="card-body text-center items-center">
                    <h2 className="card-title text-center font-bold">Caeser Salad</h2>
                    <p className="w-[80%] mx-auto">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions py-5 justify-end">
                        <button className="btn text-[#BB8506] border-x-0 border-t-0  hover:bg-black hover:border-b-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
            
            <div className="card card-compact shadow-xl bg-[#fafafa]">
                <figure><img src={pizza} alt="Shoes" /></figure>
                <div className="card-body text-center items-center">
                    <h2 className="card-title text-center font-bold">Pizza</h2>
                    <p className="w-[80%] mx-auto">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions py-5 justify-end">
                        <button className="btn text-[#BB8506] border-x-0 border-t-0  hover:bg-black hover:border-b-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
            
            <div className="card card-compact shadow-xl bg-[#fafafa]">
                <figure><img src={desert} alt="Shoes" /></figure>
                <div className="card-body text-center items-center">
                    <h2 className="card-title text-center font-bold">Desert</h2>
                    <p className="w-[80%] mx-auto">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions py-5 justify-end">
                        <button className="btn text-[#BB8506] border-x-0 border-t-0  hover:bg-black hover:border-b-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;