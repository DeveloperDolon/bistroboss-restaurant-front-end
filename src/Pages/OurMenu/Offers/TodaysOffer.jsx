import PropTypes from "prop-types";
import SessionTItle from "../../../Component/SessionTItle";
import MenuItem from "../../Home/Menu/MenuItem";
const TodaysOffer = ({data}) => {
    return (
        <div className="md:mt-28 mt-20">
            <SessionTItle title="Today's Offer" subTitle={"Don't miss"}></SessionTItle>

            <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 grid md:grid-cols-2 grid-cols-1 gap-9 md:my-16">
                {
                    data?.map(item => <MenuItem key={item._id} data={item}></MenuItem>)
                }
            </div>

            <div className="text-center md:mt-20 mb-20">
                <button className="btn bg-white border-x-0 border-t-0 border-black border-b-4">Order your favorite food</button>
            </div>
        </div>
    );
};

export default TodaysOffer;

TodaysOffer.propTypes = {
    data: PropTypes.object
}