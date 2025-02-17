import logo from "../assets/Pictures/LOGO.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

export const About = () => {
        useEffect(() => {
            window.scrollTo(0, 0); 
        }, []);
        return (
            <>
                <div className="flex flex-col items-center justify-center min-h-screen w-full p-6 bg-gray-50">
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="LOGO"
                        className="w-80 sm:max-w-sm md:max-w-md border border-gray-400 rounded-2xl shadow-lg"
                    />

                    {/* Description */}
                    <p className="p-4 text-lg text-center text-gray-700 leading-relaxed max-w-2xl">
                        Welcome to <b>Kezz Store</b>! We provide fast and secure diamond top-ups with instant delivery. <br />
                        Our dedicated team ensures a smooth and hassle-free recharge experience. <br />
                        You can also <b>join our community group</b> for updates and exclusive offers.
                    </p>

                    <a
                        href="https://chat.whatsapp.com/JFJGiTUWxF01UlSd644bi7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
                    >
                        <FaWhatsapp className="text-3xl" />
                    </a>
                </div>


            </>
        )
    }