import Image from "next/image";
import Link from "next/link";
import Logo from "../public/img/chapclicktr.png";
export default function Header() {
  return (
    <div className="sticky top-0 z-10 bg-white shadow ">
      <div className="mx-auto flex h-16 items-center justify-between px-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo of chapclick"
            width={60}
            height={60}
            quality={100}
          />
        </Link>

        <ul className="flex items-center justify-center gap-5 text-black">
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
        </ul>
      </div>
    </div>
  );
}
