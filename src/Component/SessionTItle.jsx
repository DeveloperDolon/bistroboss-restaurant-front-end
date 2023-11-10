import PropTypes from "prop-types";

const SessionTItle = ({title, subTitle}) => {
    return (
        <div className="text-center md:w-2/5 w-full md:px-0 px-[20px] mx-auto">
            <h3 className="italic md:text-lg text-base text-yellow-500 mb-3">---{subTitle}---</h3>
            <h1 className="uppercase md:text-5xl text-3xl py-6 border-y-2">{title}</h1>
        </div>
    );
};

export default SessionTItle;

SessionTItle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}