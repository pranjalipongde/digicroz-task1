import footerBg from "../assets/footerNet.png";
import footerLeft from "../assets/footerWorldMap.png";
import logo from "../assets/digi-logo-white.svg";
import { BiLogoYoutube } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0F2C] text-white pt-40 pb-0 z-10 overflow-hidden">
      {/* Right network pattern */}
      <img
        src={footerBg}
        alt="footer right graphic"
        className="absolute right-0 top-0 h-full w-auto opacity-15 pointer-events-none select-none"
      />

      {/* Left map pattern */}
      <img
        src={footerLeft}
        alt="footer left graphic"
        className="absolute left-0 bottom-0 h-full w-auto opacity-20 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Logo + Social */}
        <div>
          <img src={logo} alt="Digicroz" className="h-10 mb-6" />

          <p className="text-gray-300 text-md leading-relaxed mb-8">
            Empowering Businesses with Cutting-edge Technology Solutions
          </p>

          <div className="flex gap-3">
            {[
              BiLogoYoutube,
              FaInstagram,
              SiTelegram,
              FaLinkedinIn,
              FaWhatsapp,
            ].map((Icon, i) => (
              <div
                key={i}
                className="border border-gray-600 p-2 text-lg cursor-pointer hover:bg-[#355DFF] hover:border-[#355DFF] transition"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <div className="w-12 h-1px bg-gray-400 mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">› Our Services</li>
            <li className="hover:text-white cursor-pointer">› Contact Us</li>
          </ul>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Recent Post</h3>
          <div className="w-12 h-1px bg-gray-400 mb-5"></div>

          <p className="text-gray-500 text-sm">– No posts added yet</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="w-12 h-1px bg-gray-400 mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <li>
              Khamgaon, dist. Buldhana,
              <br />
              Maharashtra, India 444303
            </li>
            <li>+91-9834877006</li>
            <li>support@digicroz.com</li>
          </ul>

          <button className="bg-[#355DFF] w-full text-white py-3 mt-6 hover:bg-blue-600 transition">
            Get A Quote →
          </button>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="flex justify-center mb-0">
        <div className="bg-[#355DFF] w-[65px] h-[65px] rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:scale-105 transition">
          <FaArrowUp className="text-white text-lg" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#355DFF] text-white py-4 mt-10 px-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© All Copyright 2025 by Digicroz</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="cursor-pointer hover:underline">
            Terms & Condition
          </span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
