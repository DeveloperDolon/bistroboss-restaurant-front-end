import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
import "./style.css";

const Banner = () => {
    return (
        <div className="min-h-screen">
             <Carousel showArrows={true} className="text-center md:h-screen w-full overflow-x-hidden" autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
                <div>
                    <img className="h-[calc(100vh-100px)] w-full object-cover" src={img1} />
                </div>
                <div>
                    <img className="h-[calc(100vh-100px)] w-full object-cover" src={img2} />
                </div>
                <div>
                    <img className="h-[calc(100vh-100px)] w-full object-cover" src={img3} />
                </div>
                <div>
                    <img className="h-[calc(100vh-100px)] w-full object-cover" src={img4} />
                </div>
                <div>
                    <img className="h-[calc(100vh-100px)] w-full object-cover" src={img5} />
                </div>
                <div>
                    <img className="h-[calc(100vh-100px)] w-full object-cover" src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;