import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
const Navbar = () => {
  return (
    <div
      className="flex flex-row 
      fixed top-0 left-0 w-full  items-center
      backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg"
    >
      <img src={logo} alt="Logo" className="w-[60px] h-[60px]" />
      <div
        className="bg-gradient-to-r bg-clip-text text-transparent from-red-600
       to-violet-600  text-[1.5rem] font-bold text-center flex-1 lg:ml-0 "
      >
        VidGi Library
      </div>
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
