import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#d12839] text-white flex flex-col md:flex-row items-center justify-evenly p-8">
      <div className="flex items-center text-lg gap-1">
        <IoIosCall className="text-2xl" />
        <span>Toll free 1800 200 1234</span>
      </div>
      <div className="flex items-center text-lg gap-1">
        <FaFacebook className="text-2xl" />
        <span>www.facebook.com/cripumps</span>
      </div>
      <div className="flex items-center text-lg gap-1">
        <FaGlobe className="text-2xl" />
        <span>www.crigroups.com</span>
      </div>
    </footer>
  );
};

export default Footer;
