import { FaSpoon } from "react-icons/fa6";
import SessionTItle from "../../../../Component/SessionTItle";


const AddItems = () => {
    return (
        <div className="md:py-10 py-5">
            <SessionTItle
                subTitle={"What's new?"}
                title={"Add An Item"}
            ></SessionTItle>

            <div className="md:px-7 px-5 mb-28">
                <div className="mt-16 bg-[#fafafa] 2xl:w-[80%] w-full mx-auto rounded-lg shadow-lg md:py-16 py-10 md:px-20 px-6">
                    <form className="grid grid-cols-1 gap-7">
                        <label htmlFor="recipeName"><span className="md:text-lg text-base font-medium">Recipe name*</span>
                            <input className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="recipeName" type="text" required placeholder="Recipe name" />
                        </label>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <label htmlFor="category"><span className="md:text-lg text-base font-medium">Category*</span>
                                <input className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="category" type="text" placeholder="Category" required />
                            </label>
                            
                            <label htmlFor="price"><span className="md:text-lg text-base font-medium">Price*</span>
                                <input className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="price" type="text" placeholder="Price" required />
                            </label>
                        </div>

                        <label htmlFor="details">
                            <span className="md:text-lg text-base font-medium">Recipe Details*</span>
                            <textarea className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="details" id="" cols="30" rows="10" placeholder="Review in detail"></textarea>
                        </label>
                        
                        <div >
                            <input type="file" name="imgFile" id="" />
                        </div>
                        
                        <div>
                            <button
                                style={{
                                    background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                                }}
                                className="flex btn justify-center items-center gap-2 text-white px-7">
                                Add Item <FaSpoon className="md:text-2xl text-xl"></FaSpoon>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;