import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import { FaSearch } from "react-icons/fa";

/**
 * justify between=>
 *
 * icon
 *
 * left
 *     searchbar =>input+search putting the button inside
 *     Dark mode toggle ... hidden on phones
 */

const Navbar = () => {
  return (
    <div
      className="flex justify-between gap-4
      fixed top-0 left-0 w-full  items-center
      backdrop-blur-md bg-white/30 dark:bg-black/20 border-b border-white/20 dark:border-black/30 shadow-lg"
    >
      <img src={logo} alt="Logo" className="w-[66px]  h-[66px] " />
      <div className="relative items-center justify-end w-[80%] md:w-[60%] lg:w-[50%] flex gap-2  py-3 sm:px-8">
        <input
          type="text"
          placeholder="Search for games ..."
          className="h-8 p-5 focus:bg-white bg-gray-100 outline-none dark:focus:bg-gray-500
          
         text-gray-900 dark:text-gray-300 dark:bg-gray-600 rounded-3xl shadow-md w-[85%] sm:w-[70%] "
        />
        <FaSearch
          className="text-gray-200  h-[45px] cursor-pointer w-[45px] rounded-full p-[6px] 
      bg-gradient-to-r  from-red-600 hover:opacity-80 duration-200 transition-all
       hover:scale-110 absolute right-12 sm:right-20
       to-violet-600"
        />

        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
