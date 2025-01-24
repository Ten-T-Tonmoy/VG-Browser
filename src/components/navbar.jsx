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
      <input
        type="text"
        className="h-8 p-3 focus:bg-white bg-gray-100
         text-white dark:bg-gray-600 rounded-3xl shadow-md w-72 mx-3"
      />
      <FaSearch
        className="text-gray-200  h-8 cursor-pointer w-8 rounded-full p-[6px] mr-2 
      bg-gradient-to-r  from-red-600
       to-violet-600"
      />
      <div
        className="bg-gradient-to-r rounded-3xl from-red-600 text-white mx-3
       to-violet-600 dark:text-gray-200 text-[1.5rem] font-bold text-center flex-1 lg:ml-0 sm:display-none md:display-none "
      >
        V/G/L
      </div>
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
