import { React, useState } from "react";
import Logo from "../public/img/chapclicktr.png";
import Burger from "../public/Burger.png";
import Image from "next/image";
import Link from "next/link";

function Mobilenav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between py-3 text-center">
        <figure className="px-5">
          <Image
            src={Logo}
            alt="logo of chapclick"
            width={60}
            height={60}
            quality={100}
          />
        </figure>

        <figure
          className="px-3"
          aria-controls="drawer-right"
        >
          <Image
            src={Burger}
            alt="Burger menu"
            width={60}
            height={60}
            quality={100}
            onClick={handleToggle}
          />
        </figure>
      </div>
      {isOpen == true && (
        <div
          id="drawer-right"
          className="fixed z-40 h-screen w-screen overflow-y-auto bg-white p-4 pt-24 dark:bg-black"
          aria-labelledby="drawer-label"
        >
          <h1 className="text-center text-4xl text-white">
            hi nav bar
          </h1>

          <div>
            <ul className="bold flex flex-col items-center justify-center gap-5 py-5 text-3xl text-white">
              <li>
                <Link
                  className="transition-colors hover:text-cyan-500"
                  href="/contact-us"
                >
                  contact us
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-cyan-500"
                  href="/team"
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-cyan-500"
                  href="/blog"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-cyan-500"
                  href="/"
                >
                  home page
                </Link>
              </li>
              <figure className=" px-5">
                <Image
                  src={Logo}
                  alt="logo of chapclick"
                  width={200}
                  height={200}
                  quality={100}
                />
              </figure>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Mobilenav;
