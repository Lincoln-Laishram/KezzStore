import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";
// ICONS
import logo from "../assets/Pictures/icon.png";
import { MdSupervisorAccount } from "react-icons/md";
import { account } from "../Config/Auth";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCreate, setCreate] = useState(false);
    useEffect(() => {
        async function checkSession() {
            try {
                const user = await account.get();
                if (user) {
                    setCreate(true);
                }
            }
            catch (error) {
                setCreate(false);
            }
        }
        checkSession();
    }, [])
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
  className={`transition-all duration-200 ease-in-out border border-gray-400 ${
    isOpen ? "h-[400px]" : "h-[90px]"
  } overflow-hidden z-10 bg-gray-200 sticky top-0 p-1`}
>
  {/* Top bar with logo and hamburger menu */}
  <div className="flex items-center px-4">
    <Link to="/">
      <img src={logo} alt="logo" className="h-[80px]" />
    </Link>

    {/* Hamburger menu - only visible on small screens */}
    <div
      onClick={toggleMenu}
      className="ml-auto cursor-pointer sm:hidden"
    >
      {!isOpen ? (
        <GiHamburgerMenu className="text-4xl" />
      ) : (
        <ImCross className="text-3xl" />
      )}
    </div>

    {/* Inline Navigation Links - Hidden on small screens, shown on larger */}
    <ul className="hidden sm:flex space-x-6 text-2xl font-bold lg:justify-center lg:items-center w-full">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        {isCreate ? (
          <Link to="/user_profile">
            <CgProfile className="text-6xl" />
          </Link>
        ) : (
          <Link to="/sign_up">
            <MdSupervisorAccount className="text-6xl" />
          </Link>
        )}
      </li>
    </ul>
  </div>

  {/* Dropdown menu for small screens */}
  <ul
    className={`text-center mt-4 space-y-4 text-2xl font-bold ${
      isOpen ? "opacity-100" : "opacity-0"
    } transition-opacity duration-300 top-0 sticky sm:hidden`}
  >
    <li>
      {isCreate ? (
        <Link to="/user_profile">
          <CgProfile className="text-6xl mx-auto" />
        </Link>
      ) : (
        <Link to="/sign_up">
          <MdSupervisorAccount className="text-6xl mx-auto" />
        </Link>
      )}
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/products">Products</Link>
    </li>
  </ul>
</div>


        </>
    );
};
