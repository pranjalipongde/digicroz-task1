import { BiLogoYoutube } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { SiTelegram } from "react-icons/si";

const Topbar = () => {
  return (
    <div className=" hidden md:block w-full bg-black text-white text-sm">
      <div className="max-w-8xl mx-auto flex justify-between items-center py-2 px-2">
        {/* Left Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center gap-2 text-lg">
            <span>
              <GoMail />
            </span>
            <span>support@digicroz.com</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-lg">
            <span>
              <BsFillTelephoneFill />
            </span>
            <span>+91-9834877006</span>
          </div>
        </div>

        {/* Right Social */}
        <div className="flex items-center justify-center gap-4 text-lg">
          <span className="text-gray-300 text-lg">Follow Us:</span>

          <a href="#">
            <BiLogoYoutube />
          </a>
          <a href="#" className="hover:opacity-60 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:opacity-60 transition">
            <SiTelegram />
          </a>
          <a href="#" className="hover:opacity-60 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:opacity-60 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
