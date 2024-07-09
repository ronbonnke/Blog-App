import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, onSearch }) => {
  return (
    <div>
      <Navbar onSearch={onSearch} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
