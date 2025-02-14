import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";
// ICONS
import logo from "../assets/Pictures/LOGO.png";
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

      <ul className="flex bg-gray-950 p-1 items-center">
        <li className="p-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[60px] rounded-full" />
          </Link>
        </li>
        <li className="relative ml-auto p-2 text-white">
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

      {/* </div > */}

      {/* Dropdown menu for small screens */}
      {/* // <ul */}
      {/* //   className={`text-center mt-4 space-y-4 text-2xl font-bold ${ */}
      {/* //     isOpen ? "opacity-100" : "opacity-0"
  //   } transition-opacity duration-300 top-0 sticky sm:hidden`}
  // > */}
      {/* // <li> */}
      {/* //   {isCreate ? (
    //     <Link to="/user_profile">
    //       <CgProfile className="text-6xl mx-auto" />
    //     </Link>
    //   ) : (
    //     <Link to="/sign_up">
    //       <MdSupervisorAccount className="text-6xl mx-auto" />
    //     </Link>
    //   )}
    // </li>
  </ul > */}
    </>
  );
};
