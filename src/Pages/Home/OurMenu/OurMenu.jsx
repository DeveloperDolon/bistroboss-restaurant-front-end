import SessionTItle from "../../../Component/SessionTItle";
import "./style.css";
import backImg from "../../../assets/home/featured.jpg";

const OurMenu = () => {
    return (
        <div className="menus-container py-24 text-white">
            <div className="relative z-30">
                <SessionTItle
                title={"Check it out"}
                subTitle={"From Our Menu"}
                ></SessionTItle>
            </div>

            <div className="max-w-7xl relative z-30 mx-auto lg:px-0 md:px-5 px-3 text-white grid md:grid-cols-2 grid-cols-1 mt-12 gap-12 items-center">
                <div>
                    <img className="rounded-sm" src={backImg} alt="" />
                </div>

                <div className="space-y-2">
                    <h3 className="md:text-lg text-base">March 20, 2023</h3>
                    <h2 className="uppercase md:text-xl text-lg">Where can i get some?</h2>

                    <p className="md:text-base text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>

                    <div className="pt-5">
                        <button className="btn text-white bg-transparent border-t-0 border-x-0 border-b-4 hover:bg-black hover:border-b-0">Read More</button>
                    </div>
                </div>
            </div>
            <span className="absolute h-full w-full top-0 bg-black bg-opacity-50"></span>
        </div>
    );
};

export default OurMenu;