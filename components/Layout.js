import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </html>
  );
};

export default Layout;
