import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/digi-logo-colored.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { BiLogoYoutube } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Digicroz logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex gap-8 text-gray-900 font-medium">
          <Link to="/" className="hover:text-[#5F27FF] transition-colors">
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-[#5F27FF] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#5F27FF] transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-blue-600 text-2xl"
          onClick={() => setOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* 🔥 Overlay (Click to Close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 📱 Slide Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-white shadow-2xl z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header (Fixed) */}
        <div className="flex justify-between items-center px-6 py-4  sticky top-0 bg-white z-50">
          <img src={logo} alt="Digicroz logo" className="h-14 w-auto" />

          <button
            onClick={() => setOpen(false)}
            className="text-white text-lg bg-blue-600 rounded-full h-6 w-6 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="overflow-y-auto h-[calc(100vh-72px)] px-4 py-6">
          {/* Links */}
          <nav className="flex flex-col gap-3 text-gray-800 font-medium mb-8">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <hr className="text-gray-200" />
            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <hr className="text-gray-200" />
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <hr className="text-gray-200" />
          </nav>

          {/* Contact Info */}
          <h3 className="font-semibold text-black text-lg mb-4">
            Contact Info
          </h3>

          <div className="flex flex-col gap-4 text-gray-700 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-blue-900 text-lg" />
              <span>Khamgaon, dist. Buldhana, Maharashtra, India 444303</span>
            </div>
            <div className="flex items-center gap-2">
              <GoMail className="text-blue-900 text-lg" />
              <span>support@digicroz.com</span>
            </div>
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill className="text-blue-900 text-lg" />
              <span>+91-9834877006</span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-[#5F27FF] text-white py-3 font-medium ">
            Get A Quote →
          </button>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-10 pt-6 text-xl text-gray-600 mb-4">
            <BiLogoYoutube />
            <FaInstagram />
            <SiTelegram />
            <FaLinkedinIn />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
