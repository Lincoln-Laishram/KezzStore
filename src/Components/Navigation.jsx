import { Link } from "react-router-dom";
import logo from "../assets/Pictures/LOGO.png";
export const NavBar = () => {
  
  return (
    <>

      <ul className="flex bg-black p-1 items-center">
        <li className="p-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[60px] rounded-xl" />
          </Link>
        </li>
      </ul>
    </>
  );
};
