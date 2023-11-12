import PropTypes from "prop-types";
import MenuItem from "../../Home/Menu/MenuItem";
const MenuSection = ({ bgImg, title, description, menuItems }) => {
    return (
        <div>
            <div style={{
                background: `url("${bgImg}") no-repeat  center center`,
                backgroundSize: "cover"
            }} className="md:py-32 py-24">
                <div className="max-w-5xl mx-auto text-center bg-black bg-opacity-50 rounded-md md:p-28 p-20 text-white">
                    <h1 className="cinzel-text md:text-5xl text-3xl font-bold">{title}</h1>
                    <p className="mt-5 md:text-base text-sm md:leading-relaxed leading-relaxed">{description}</p>
                </div>
            </div>
            <div className=" max-w-7xl mx-auto lg:px-0 md:px-5 px-3 grid md:grid-cols-2 grid-cols-1 gap-8 md:my-28 my-20">
                {
                    menuItems.map(menu => <MenuItem key={menu._id} data={menu}></MenuItem>)
                }
            </div>

            <div className="text-center md:mt-20 mb-20">
                <button className="btn bg-white border-x-0 border-t-0 border-black border-b-4">Order your favorite food</button>
            </div>
        </div>
    );
};

export default MenuSection;
MenuSection.propTypes = {
    bgImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    menuItems: PropTypes.array
}