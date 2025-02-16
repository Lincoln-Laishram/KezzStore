// Import Swiper core and required modules
import carousal1 from "../assets/Pictures/carousal1.jpg";
import carousal2 from "../assets/Pictures/carousal2.jpg";
import { Navigation, Autoplay, A11y, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export const Carousal = () => {
    return (
        <div className="bg-amber-300 w-full lg:w-1/2 border border-gray-500 relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                pagination={{ clickable: true }} 
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide className="bg-white">
                    <div className="flex justify-center items-center h-[200px] lg:h-[400px]">
                        <img className="h-full w-full object-cover" src={carousal1} alt="Slide 1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white">
                    <div className="flex justify-center items-center h-[200px] lg:h-[400px]">
                        <img className="h-full w-full object-cover" src={carousal2} alt="Slide 2" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <style>
                {`
                .swiper-pagination-bullet {
                    width: 50px;
                    height: 10px;
                    border-radius:10px;
                    background-color: gray;
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }

                .swiper-pagination-bullet-active {
                    background-color: white;
                    opacity: 1;
                    transform: scale(1.2);
                }
                `}
            </style>
        </div>
    );
};
