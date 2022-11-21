import Image from "next/image";
import placeholder from "../public/img/placeholder.jpg";
import serviceIcon from "../public/img/service.png";

export default function OurServices() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl">Our Services</h1>
        <h2 className="text-ml">Why Us?!</h2>
      </div>

      <div className="flex justify-evenly">
        <section className="w-92 ">
          <Image
            src={placeholder}
            width={400}
            height={400}
            alt="hero image"
            className="shadow-ml rounded-xl"
          />
        </section>
        <section className="w-68  mt-10 text-center">
          <section>
            <h1>title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <hr />
              anim aliquip amet laboris aliquip.
              <hr />
            </h2>
            <figure className="mt-5 flex justify-center pt-5">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </section>

          <section className="m-10">
            <h1>title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <hr />
              anim aliquip amet laboris aliquip.
              <hr />
            </h2>
            <figure className="mt-5 flex justify-center pt-5">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </section>
        </section>

        <section className="w-68  mt-10 text-center">
          <section>
            <h1>title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <hr />
              anim aliquip amet laboris aliquip.
              <hr />
            </h2>
            <figure className="mt-5 flex justify-center pt-5">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </section>

          <section className="m-10">
            <h1>title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <hr />
              anim aliquip amet laboris aliquip.
              <hr />
            </h2>
            <figure className="mt-5 flex justify-center pt-5">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </section>
        </section>
      </div>
    </>
  );
}
