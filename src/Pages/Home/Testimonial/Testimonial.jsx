import { useEffect, useState } from "react";
import SessionTItle from "../../../Component/SessionTItle";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axiosSecure.get("/api/v1/reviews")
            .then(res => {
                setReviews(res.data);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="my-28">
            <SessionTItle
                subTitle={"What Our Clients Say"}
                title={"Testimonials"}
            ></SessionTItle>

            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-xs mx-auto lg:px-0 md:px-5 px-3 mt-12">
                <Swiper navigation={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Navigation]} className="mySwiper">
                        {
                            reviews?.map(item => <SwiperSlide key={item._id} className="w-full grid grid-cols-1">
                            <Rating
                                className="mx-auto pb-6"
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
    
                            <div className="flex justify-center flex-col items-center">
                                <span className="md:text-8xl text-5xl">
                                    <FaQuoteLeft></FaQuoteLeft>
                                </span>

                                <p className="md:w-[80%] w-full md:leading-loose leading-relaxed mx-auto text-center md:text-base text-sm py-5">{item.details}</p>
                                <h2 className="md:text-3xl text-xl uppercase text-amber-500 ">{item.name}</h2>
                            </div>
                        </SwiperSlide>)
                        }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;