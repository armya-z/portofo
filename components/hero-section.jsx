import Image from "next/image";
import hero1 from "../public/img/hero1.jpg";
import hero2 from "../public/img/hero2.jpg";
import hero3 from "../public/img/hero3.jpg";
export default function () {
  return (
    <>
      <div>
        <div className="h-screen bg-hero3 bg-cover">
          <section className="flex h-screen items-center justify-center">
            <h1 className=" w-fit rounded-2xl bg-white p-4 text-center text-5xl text-black">
              Chapclick Group
              <hr />
              <p className="mt-5 text-base italic">
                {" "}
                Do Not Hesitate
              </p>
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}
