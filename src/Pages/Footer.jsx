import logo from "../assets/Pictures/LOGO.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaSnapchat, FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <footer className="h-[650px] p-6 text-center bg-black">
                <div>
                    <img src={logo} alt="logo" className="h-[220px] mx-[auto] rounded-full" />v
                </div>
                <div>
                    <ul className="text-[gray] text-lg">
                        <li className="m-3">
                            Terms and Conditions
                        </li>
                        <li className="m-3">
                            Our Policy
                        </li>
                        <li className="m-3">
                            About Us
                        </li>
                    </ul>
                </div> <br />
                <div className="text-[gray] text-2xl">
                    Connect with us on <br />
                    <div>
                        <ul className="flex justify-center gap-1 text-[gray] text-xl">
                            <li className="m-3 text-3xl">
                                <FaFacebookF />
                            </li>
                            <li className="m-3 text-3xl">
                                <FaTwitter />
                            </li>
                            <li className="m-3 text-3xl">
                                <FaInstagram />
                            </li>
                            <li className="m-3 text-3xl">
                                <FaSnapchat />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-[gray] text-xl relative top-6">
                    &copy; 2025 Pinealxt. All rights reserved.
                </div>
            </footer>
        </>
    )
}