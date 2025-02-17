import { Link } from "react-router-dom";
import logo from "../assets/Pictures/LOGO.jpg";
export const NavBar = () => {
  
  return (
    <>

      <ul className="flex bg-black sm:p-1 lg:p-4">
        <li className="p-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[60px] rounded-xl sm:h-[60px] lg:h-[70px]" />
          </Link>
        </li>
      </ul>
    </>
  );
};
