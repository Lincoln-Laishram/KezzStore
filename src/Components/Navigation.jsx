import { GiHamburgerMenu } from "react-icons/gi";
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
                className={`transition-all duration-300 ease-in-out border border-gray-400 ${isOpen ? "h-[350px]" : "h-[100px]"} overflow-hidden relative z-10 bg-gray-200 sticky top-0`}
            >
                <div className="flex items-center px-4">
                    <img src={logo} alt="logo" className="h-[80px]" />
                    <GiHamburgerMenu
                        className="ml-auto text-5xl cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>

                <ul
                    className={`text-center mt-4 space-y-4 text-2xl font-bold ${isOpen ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-300`}
                >
                    <li>
                        <CgProfile className="text-6xl mx-auto" />
                    </li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Products</li>
                </ul>
            </div>
        </>
    );
};
