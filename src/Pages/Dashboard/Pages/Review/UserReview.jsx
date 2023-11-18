import { FaRocket } from "react-icons/fa";
import SessionTItle from "../../../../Component/SessionTItle";

const UserReview = () => {
    return (
        <div className="md:py-10 py-5">
            <SessionTItle
                subTitle={"Sharing is Caring!!!"}
                title={"Give A Review"}
            ></SessionTItle>

            <div className="md:px-7 px-5 mb-28">
                <div className="mt-16 bg-[#fafafa] 2xl:w-[80%] w-full mx-auto rounded-lg shadow-lg md:py-16 py-10 md:px-20 px-6">
                    <h1 className="cinzel-text text-center md:text-4xl text-2xl font-semibold">Rate Us!</h1>

                    <form className="grid grid-cols-1 gap-7 md:mt-20 mt-10">
                        <label htmlFor="likedRecipe"><span className="md:text-lg text-base font-medium">Which recipe you liked most?</span>
                            <input className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="likedRecipe" type="text" required placeholder="Recipe You liked most" />
                        </label>
                        
                        <label htmlFor="suggestRecipe"><span className="md:text-lg text-base font-medium">Do you have any suggestion for us?</span>
                            <input className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="suggestRecipe" type="text" placeholder="Suggestion" required />
                        </label>
                        
                        <label htmlFor="details">
                        <span className="md:text-lg text-base font-medium">Kindly express your care in a short way.</span>
                            <textarea className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" name="details" id="" cols="30" rows="10" placeholder="Review in detail"></textarea>
                        </label>

                        <div>
                        <button
                        style={{
                            background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                        }}
                        className="flex btn justify-center items-center gap-2 text-white px-7">
                        Send Review <FaRocket className="md:text-xl text-lg"></FaRocket>
                    </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;