import PropTypes from "prop-types";

const MenuItem = ({data}) => {
    return (
        <div className="grid grid-cols-5 gap-6">
            <div>
                <img className="rounded-bl-full w-full h-full rounded-r-full" src={data?.image} alt="" />
            </div>

            <div className="col-span-4">
                <div className="flex  justify-between items-center">
                    <h1 className="cinzel-text font-medium md:text-xl text-base">{data?.name} -----------</h1>
                    <p>${data?.price}</p>
                </div>

                <p className="font-light md:text-base text-sm mt-3">
                    {data?.recipe}
                </p>
            </div>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    data: PropTypes.object
}