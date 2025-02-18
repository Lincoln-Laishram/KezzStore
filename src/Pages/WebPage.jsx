import { FaWhatsapp } from "react-icons/fa";
import { NavBar } from "../Components/Navigation";
import { Carousal } from "../Components/Carousel";
import { Footer } from "./Footer";
import img from "../assets/Pictures/mlbb.webp";
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
                <div className="h-60 flex items-center">
                    <div className="mx-auto bg-gray-200 p-4 w-30 sm:p-2 flex flex-col items-center m-4 rounded-xl shadow-md shadow-gray-400 hover:scale-110 transition-transform duration-300 sm:w-16 lg:w-40">
                        <img src={img} alt="img" className="rounded-lg h-20 lg:h-28" />
                        <p className=" m-1 text-sm text-center sm:text-xs lg:text-lg"><b>Mobile Legend</b></p>
                    </div>
                </div>


            </Link>
            <Footer />
        </>
    );
};
