import React from "react";
import DesktopHeader from "./desktopnav";
import Mobilenav from "./mobilenav";

function header() {
  return (
    <>
      <div>
        <div className="hidden md:block lg:block xl:block 2xl:block">
          <DesktopHeader />
        </div>
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <Mobilenav />
        </div>
      </div>
    </>
  );
}

export default header;
