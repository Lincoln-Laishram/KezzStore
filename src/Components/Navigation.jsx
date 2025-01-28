import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import logo from "../assets/Pictures/icon.png";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`transition-all duration-200 ease-in-out border border-gray-400 ${isOpen ? "h-[400px]" : "h-[90px]"
                    } overflow-hidden z-10 bg-gray-200 sticky top-0`}
            >
                <div className="flex items-center px-4">
                    <img src={logo} alt="logo" className="h-[80px]" />
                    <div onClick={toggleMenu} className="ml-auto cursor-pointer">
                        {!isOpen ? <GiHamburgerMenu className=" text-4xl" /> : <ImCross className="text-3xl" />}
                    </div>
                </div>

                <ul
                    className={`text-center mt-4 space-y-4 text-2xl font-bold ${isOpen ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-300 top-0 sticky`}
                >
                    <li>
                        <Link to = "/sign_up">
                            <CgProfile className="text-6xl mx-auto" />
                        </Link>
                    </li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Products</li>
                </ul>
            </div>

        </>
    );
};
