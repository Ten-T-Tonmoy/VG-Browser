import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
      <p className="text-red-500">Topbar Beatch</p>
    </div>
  );
};

export default Navbar;
