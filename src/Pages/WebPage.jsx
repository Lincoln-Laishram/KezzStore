import { FaWhatsapp } from "react-icons/fa";
import { NavBar } from "../Components/Navigation";
import { Carousal } from "../Components/Carousel";
import { Diamonds } from "../Components/Diamonds";
import { Footer } from "./Footer";
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
            <Diamonds />
            <Footer />
        </>
    );
};
