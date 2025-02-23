import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div
      className="flex flex-row 
      fixed top-0 left-0 w-full  items-center
      backdrop-blur-md bg-white/30 dark:bg-black/20 border-b border-white/20 dark:border-black/30 shadow-lg"
    >
      <img src={logo} alt="Logo" className="w-[60px]  h-[60px]" />
      <div className="justify-between w-full flex">
        <div className="flex row w-full ">
          <input
            type="text"
            className="h-8 p-3 focus:bg-white bg-gray-100
         text-white dark:bg-gray-600 rounded-3xl shadow-md w-full md:w-[350px]  mx-3"
          />
          <FaSearch
            className="text-gray-200  h-8 cursor-pointer w-8 rounded-full p-[6px] mr-2 
      bg-gradient-to-r  from-red-600
       to-violet-600"
          />
        </div>

        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
