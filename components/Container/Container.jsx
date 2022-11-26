import React from "react";
import Footer from "../Footer";
import Header from "../header";
const Container = ({ children }) => {
  return (
    <>
      <div className="container flex w-screen flex-col justify-center ">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
