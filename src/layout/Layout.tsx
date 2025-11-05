import React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <FooterCTA />
      <Footer />
    </>
  );
};

export default Layout;
