// Import Swiper core and required modules
import img1 from "../assets/Pictures/emperor.png";
import img2 from "../assets/Pictures/kerassentials.png";
import img3 from "../assets/Pictures/pinealxt.png";
import { Navigation, Autoplay, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const Carousal = () => {
    return (
        <div className="border-b border-b-gray-400 border-solid">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade" // Enable the fade effect
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                loop={true}
            >

                <SwiperSlide className="bg-[white] p-6">
                    <div className="
                flex justify-evenly h-[200px]
                lg:h-[400px] lg:justify-center gap-8
                ">
                        <img
                            className="
                    h-[150px] w-[auto] relative left-[-24px] my-[auto]
                    sm:h-[150px]
                    lg:h-[340px]
                    " src={img1} alt="Slide 2" />
                        <div
                            className="
                    my-[auto] w-[150px] 
                    lg:
                    ">
                            <p className="font-bold text-2xl lg:text-4xl">NeuroActiv6</p>
                            <p className="text-l text-[red] lg:text-2xl">80%</p>
                            <button className=" 
                        w-[100px] mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-600
                        sm:text-lg
                        lg:h-[40px] lg:w-[150px] lg:text-xl
                        ">
                                Details
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white p-6">
                    <div className="
                flex justify-evenly h-[200px]
                lg:h-[400px] lg:justify-center gap-8
                ">
                        <img
                            className="
                    h-[150px] w-[auto] relative left-[-24px] my-[auto]
                    sm:h-[150px]
                    lg:h-[340px]
                    " src={img1} alt="Slide 2" />
                        <div className="my-[auto] w-[150px] ">
                            <p className="font-bold text-2xl">Kerassentials</p>
                            <p className="text-l text-[red]">40%</p>
                            <button className=" w-[100px] mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-600">
                                Details
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white p-6">
                    <div className="
                flex justify-evenly h-[200px]
                lg:h-[400px] lg:justify-center gap-8
                ">
                        <img
                            className="
                    h-[150px] w-[auto] relative left-[-24px] my-[auto]
                    sm:h-[150px]
                    lg:h-[340px]
                    " src={img1} alt="Slide 2" />                    <div className="my-[auto] w-[150px] ">
                            <p className="font-bold text-2xl">Pinealxt</p>
                            <p className="text-l text-[red]">80%</p>
                            <button className=" w-[100px] mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-600">
                                Details
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="hidden sm:block">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>

            </Swiper>
        </div >
    );
};
