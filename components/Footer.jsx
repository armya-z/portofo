import Logo from "../public/img/chapclicktr.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 items-center justify-center bg-black py-10 text-white">
        <section className="flex flex-row justify-around">
          <ul className="px-3 text-sm">
            <Link href="/blog">
              <li>blog</li>
            </Link>

            <Link href="/team">
              <li>team</li>
            </Link>

            <Link href="/contact-us">
              <li>contact-us</li>
            </Link>
          </ul>
          <figure>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo of chapclick"
                width={60}
                height={60}
                quality={100}
              />
            </Link>
          </figure>
        </section>
      </div>
      <p className="bg-black py-5 text-center text-xs text-white">
        2022 all rights reserved for ChapClick
        Team
      </p>
    </div>
  );
}
