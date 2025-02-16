import logo from "../assets/Pictures/LOGO.png";
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <>
            <footer className="h-[500px] p-6 text-center bg-black">
                <div>
                    <img src={logo} alt="logo" className="h-[220px] mx-[auto] rounded-xl" />v
                </div>
                <div>
                    <ul className="text-[gray] text-lg">
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
                <div className="text-[gray] text-2xl">
                    Contact us #00000
                </div>
                <div className="text-[gray] text-xl relative top-6">
                    &copy; 2025 Pinealxt. All rights reserved.
                </div>
            </footer>
        </>
    )
}