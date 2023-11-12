import PropTypes from "prop-types";

const BannerCover = ({image, title, subtitle}) => {
    return (
        <div style={{
            background: `url("${image}") no-repeat center center`,
            backgroundSize: "cover"
        }} className="min-h-screen flex flex-col justify-center items-center pt-[64px]">
            <div className="text-white text-center max-w-7xl mx-auto lg:px-0 md:px-5 px-3  bg-black bg-opacity-50 w-full md:py-32 py-20">
                <h1 className="md:text-8xl font-bold text-5xl cinzel-text">{title}</h1>
                <h3 className="cinzel-text md:text-xl text-lg font-bold md:pt-5 pt-3">{subtitle}</h3>
            </div>
        </div>
    );
};

export default BannerCover;
BannerCover.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}