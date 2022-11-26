import React from "react";
import Header from "../header";
const Container = ({ children }) => {
  return (
    <>
      <div className="container flex w-screen flex-col justify-center ">
        <div>
          <Header />
        </div>
        {children}
      </div>
    </>
  );
};

export default Container;
