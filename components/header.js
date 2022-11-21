import Image from "next/image";
import Logo from "../public/img/chapclicktr.png";
export default function Header() {
  return (
    <div className="sticky top-0 z-10 bg-white shadow ">
      <div className="mx-auto flex h-16 items-center justify-between px-5">
        <Image
          src={Logo}
          alt="logo of chapclick"
          width={60}
          height={60}
          quality={100}
        />

        <ul className="flex items-center justify-center gap-5 text-black">
          <li>
            <a
              className="transition-colors hover:text-cyan-500"
              href=""
            >
              contact us
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-cyan-500"
              href=""
            >
              about us
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-cyan-500"
              href=""
            >
              home page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
