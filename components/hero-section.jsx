import Image from "next/image";
import hero1 from "../public/img/hero1.jpg";
import hero2 from "../public/img/hero2.jpg";
import hero3 from "../public/img/hero3.jpg";
export default function heroSection() {
  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-screen items-center justify-center bg-hero2 bg-cover">
        <div className="w-2/5 rounded-lg bg-white">
          <h1 className="p-2 text-center text-sm text-black ">
            Chapclick Group
            <br />
            <p className="text-xs">
              Do Not Hesitate
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}
