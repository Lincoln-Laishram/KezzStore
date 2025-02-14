// Import Swiper core and required modules
import thumbnail from "../assets/Pictures/thumb1.jpg";
import thumbnail1 from "../assets/Pictures/thumb2.jpg";
import { Navigation, Autoplay, A11y, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // ✅ Import Pagination styles

export const Carousal = () => {
    return (
        <div className="bg-amber-300 w-full lg:w-1/2 border border-gray-500 relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                pagination={{ clickable: true }} // ✅ Enable pagination
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide className="bg-white">
                    <div className="flex justify-center items-center h-[200px] lg:h-[400px]">
                        <img className="h-full w-full object-cover" src={thumbnail} alt="Slide 1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white">
                    <div className="flex justify-center items-center h-[200px] lg:h-[400px]">
                        <img className="h-full w-full object-cover" src={thumbnail1} alt="Slide 2" />
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Styled Pagination */}
            <style>
                {`
                .swiper-pagination-bullet {
                    width: 20px;
                    height: 20px;
                    background-color: white;
                    border:1px solid white;
                    opacity: 0.6;
                    transition: all 0.3s ease-in-out;
                }

                .swiper-pagination-bullet-active {
                    background-color: black;
                    opacity: 1;
                    transform: scale(1.2);
                }
                `}
            </style>
        </div>
    );
};
