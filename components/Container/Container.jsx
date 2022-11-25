import React from "react";
import Header from "../header";

const Container = ({ children }) => {
  return (
    <div className="container flex flex-col bg-red-500">
      <Header />
      {children}
    </div>
  );
};

export default Container;
