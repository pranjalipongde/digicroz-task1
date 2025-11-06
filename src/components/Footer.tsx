import footerBg from "../assets/footerNet.png";
import footerLeft from "../assets/footerWorldMap.png";
import logo from "../assets/digi-logo-white.svg";
import { BiLogoYoutube } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0F2C] text-white pt-40 pb-0 z-10 overflow-visible">
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
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <div className="w-24 h-px bg-gray-400 mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="hover:text-white cursor-pointer">› Our Services</li>
            <li className="hover:text-white cursor-pointer">› Contact Us</li>
          </ul>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Recent Post</h3>
          <div className="w-24 h-px bg-gray-400 mb-5"></div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
          <div className="w-24 h-px bg-gray-500/40 mb-5"></div>

          <ul className="space-y-4 text-gray-300 text-lg leading-relaxed">
            {/* Address */}
            <li className="flex items-start gap-3">
              <CiLocationOn className="text-white text-xl mt-1" />
              <span>
                Khamgaon, dist. Buldhana, <br />
                Maharashtra, India 444303
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <BsFillTelephoneFill className="text-white text-lg" />
              <span>+91-9834877006</span>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <GoMail className="text-white text-lg" />
              <span>support@digicroz.com</span>
            </li>
          </ul>

          <button className="bg-[#355DFF] text-white py-4 px-8 mt-6 hover:bg-blue-600 transition">
            Get A Quote →
          </button>
        </div>
      </div>

      {/* Bottom Blue Strip */}
      <div className="relative bg-[#355DFF] text-white py-4 mt-14 px-6 text-sm flex flex-col md:flex-row justify-between items-center">
        {/* SCROLL BUTTON FLOATING */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="absolute left-1/2 -translate-x-1/2 -top-7 w-[62px] h-[62px] rounded-full bg-[#355DFF] border-[5px] border-white flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 z-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>

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
