import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="container flex w-screen flex-col justify-center ">
        {children}
      </div>
    </>
  );
};

export default Container;
