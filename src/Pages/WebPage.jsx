import { FaWhatsapp } from "react-icons/fa";
import { NavBar } from "../Components/Navigation";
import { Carousal } from "../Components/Carousel";
import { Footer } from "./Footer";
import img from "../assets/Pictures/mlbb.webp";
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
            <Link to="/diamondPage">
                <div className="h-60 flex items-center w-80 mx-auto scale-80 md:w-80 md:mx-[14%] lg:w-100 lg:mx-[14%]">
                    <div className="mx-auto bg-gray-200 p-4 w-30 sm:p-2 flex flex-col items-center m-4 rounded-xl shadow-md shadow-gray-400 hover:scale-110 transition-transform duration-300 md:w-30 lg:w-40 lg:scale-80">
                        <img src={diaImg} alt="img" className="rounded-lg h-20 lg:h-28" />
                        <p className=" m-1 text-sm text-center sm:text-xs lg:text-lg"><b>Diamonds</b></p>
                    </div>
                    <div className="mx-auto bg-gray-200 p-4 w-36 sm:p-2 flex flex-col items-center m-4 rounded-xl shadow-md shadow-gray-400 hover:scale-110 transition-transform duration-300 md:w-30 lg:w-40 lg:scale-80">
                        <img src={img} alt="img" className="rounded-lg h-20 lg:h-28" />
                        <p className=" m-1 text-sm text-center sm:text-xs lg:text-lg"><b>MLBB Account</b></p>
                    </div>
                </div>


            </Link>
            <Footer />
        </>
    );
};
