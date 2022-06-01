import React, { useEffect } from "react";
// import Footer from '../Footer'
import Header from "../Header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
