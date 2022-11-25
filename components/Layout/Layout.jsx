import React from "react";
import Header from "../header";
import Container from "../Container/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex h-auto w-screen justify-center ">
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
