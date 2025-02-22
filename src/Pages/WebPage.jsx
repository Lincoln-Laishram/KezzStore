import { FaWhatsapp } from "react-icons/fa";
import { NavBar } from "../Components/Navigation";
import { Carousal } from "../Components/Carousel";
import { Footer } from "./Footer";
import weekly from '../assets/Pictures/weeklypass.jpg'
import diaImg from '../assets/Pictures/diamonds.webp';
import { Link } from "react-router-dom";
export const WebPage = () => {
    return (
        <>
            <a
                href="https://chat.whatsapp.com/JFJGiTUWxF01UlSd644bi7"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 z-50"
            >
                <FaWhatsapp className="size-15" />
            </a>
            <NavBar />
            <Carousal />
            <div className="h-60 flex items-center justify-center w-full scale-80 gap-4 
                md:w-80 md:mx-[14%] lg:w-100 
                lg:mx-[14%] lg:gap-4">
                <Link to="/smallPack">
                    <div className="mx-auto bg-gray-200 p-4 w-34 sm:p-2 flex flex-col items-center 
                        m-4 rounded-xl shadow-md shadow-gray-400 hover:scale-100 
                        transition-transform duration-300 md:w-30 lg:w-44 lg:scale-80">
                        <img src={diaImg} alt="img" className="rounded-lg h-20 lg:h-28" />
                        <p className="m-1 text-sm text-center sm:text-xs lg:text-lg"><b>Small pack</b></p>
                    </div>
                </Link>
                <Link to="/diamondPage">
                    <div className="mx-auto bg-gray-200 p-4 w-34 sm:p-2 flex flex-col items-center 
                        m-4 rounded-xl shadow-md shadow-gray-400 hover:scale-100 
                        transition-transform duration-300 md:w-30 lg:w-44 lg:scale-80">
                        <img src={diaImg} alt="img" className="rounded-lg h-20 lg:h-28" />
                        <p className="m-1 text-sm text-center sm:text-xs lg:text-lg"><b>MLBB Diamonds</b></p>
                    </div>
                </Link>
                <Link to="/weeklyPass">
                    <div className="mx-auto bg-gray-200 p-4 w-34 sm:p-2 flex flex-col items-center 
                        m-4 rounded-xl shadow-md shadow-gray-400 hover:scale-100 
                        transition-transform duration-300 md:w-30 lg:w-44 lg:scale-80">
                        <img src={weekly} alt="img" className="rounded-lg h-20 lg:h-28" />
                        <p className="m-1 text-sm text-center sm:text-xs lg:text-lg"><b>Weekly Pass</b></p>
                    </div>
                </Link>
            </div>

            <Footer />
        </>
    );
};
