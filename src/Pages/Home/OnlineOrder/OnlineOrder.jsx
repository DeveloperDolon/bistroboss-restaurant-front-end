

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import pImg1 from "../../../assets/home/slide1.jpg";
import pImg2 from "../../../assets/home/slide2.jpg";
import pImg3 from "../../../assets/home/slide3.jpg";
import pImg4 from "../../../assets/home/slide4.jpg";
import pImg5 from "../../../assets/home/slide5.jpg";
import SessionTItle from "../../../Component/SessionTItle";


const OnlineOrder = () => {

    return (
        <div className="md:py-24 py-20">
            <SessionTItle
                subTitle="From 11:00an to 10:00pm"
                title="Order Online"
            ></SessionTItle>

            <div className='lg:max-w-5xl md:max-w-3xl sm:max-w-xl mx-auto max-w-xs mt-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={pImg1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pImg2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pImg3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pImg4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pImg5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OnlineOrder;