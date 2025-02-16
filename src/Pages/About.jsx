import logo from "../assets/Pictures/LOGO.png"
import { FaWhatsapp } from "react-icons/fa";

export const About = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-full">
                <img src={logo} alt="LOGO" className="w-1/2 border-1 border-solid border-black rounded-2xl "/>
                <p className="p-4 text-lg">
                    &nbsp; &nbsp;  Welcome to <b>Kezz Store</b>! We provide fast and secure diamond top-ups with instant delivery.
                    &nbsp; &nbsp;  Our dedicated team ensures a smooth and hassle-free recharge experience. <br />
                    &nbsp; &nbsp; You can also <b>join our community group</b> for updates and exclusive offers.
                </p>
                <a
                    href="https://chat.whatsapp.com/JFJGiTUWxF01UlSd644bi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 z-50"
                >
                    <FaWhatsapp className="size-15" />
                </a>
            </div>

        </>
    )
}