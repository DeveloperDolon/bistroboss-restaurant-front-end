import { FaRocket, FaStar } from "react-icons/fa";
import SessionTItle from "../../../../Component/SessionTItle";
import { useState } from "react";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const UserReview = () => {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div className="md:py-10 py-5">
            <SessionTItle
                subTitle={"Sharing is Caring!!!"}
                title={"Give A Review"}
            ></SessionTItle>

            <div className="md:px-7 px-5 mb-28">
                <div className="mt-16 bg-[#fafafa] 2xl:w-[80%] w-full mx-auto rounded-lg shadow-lg md:py-16 py-10 md:px-20 px-6">
                    <h1 className="cinzel-text text-center md:text-4xl text-2xl font-semibold">Rate Us!</h1>

                    <div className="flex justify-center pt-10" style={styles.stars}>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={50}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                />
                            )
                        })}
                    </div>

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

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };

export default UserReview;