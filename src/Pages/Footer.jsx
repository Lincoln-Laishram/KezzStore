import logo from "../assets/Pictures/LOGO.jpg";
import upi from "../assets/Pictures/upi.webp"
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer className="h-[460px] p-6 text-center bg-black md:h-[500px] md:flex md:items-center md:justify-evenly  lg:h-[520px] lg:flex lg:items-center lg:justify-center lg:gap-12">
                <div>
                    <img src={logo} alt="logo" className="h-[120px] mx-auto rounded-xl sm:h-[180px] lg:h-[280px] lg:w-[260px]" />v
                </div>
                <div>
                    <div>
                        <ul className="text-[gray] text-xl">
                            <li className="m-3">
                                <Link to="/termsAndConditions">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li className="m-3">
                                <Link to="/aboutPage">About us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-[gray] text-xl flex justify-center">
                        <a href="https://wa.me/message/T2T2QUTLOFIGO1" className="flex items-center gap-1">
                            Contact us <FaPhoneAlt />
                        </a>
                    </div>
                    <div className="text-[gray] text-xl flex justify-center gap-1 p-1">
                        Supports <img src={upi} alt="upi" className="h-8" />
                    </div>
                    <div className="text-[gray] text-xl relative top-6">
                        &copy; 2025 Pinealxt. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}