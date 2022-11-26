import Image from "next/image";
import placeholder from "../public/img/placeholder.jpg";
import serviceIcon from "../public/img/service.png";

export default function OurServices() {
  return (
    <>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-2xl">Our Services</h1>
        <h2 className="text-ml">Why Us?!</h2>
      </div>

      <div className="mt-3 justify-around">
        <section className="flex justify-center">
          <Image
            src={placeholder}
            width={300}
            height={300}
            alt="hero image"
            className="shadow-ml rounded-xl"
          />
        </section>
        <div className="mx-5 mt-5 grid grid-cols-2 justify-evenly gap-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
          <div className="mt-5 text-center">
            <div>
              <h1 className="text-xl">title</h1>
              <h2>
                Dolore consectetur eiusmod
                proident
                <br />
                anim aliquip amet laboris aliquip.
                <br />
              </h2>
              <figure className="mt-5 flex justify-center">
                <Image
                  src={serviceIcon}
                  width={40}
                  height={40}
                  alt="hero image"
                />
              </figure>
            </div>
          </div>

          <div className="mt-5 text-center">
            <h1 className="text-xl">title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <br />
              anim aliquip amet laboris aliquip.
              <br />
            </h2>
            <figure className="mt-5 flex justify-center">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </div>

          <div className="mt-5 text-center">
            <h1 className="text-xl">title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <br />
              anim aliquip amet laboris aliquip.
              <br />
            </h2>
            <figure className="mt-5 flex justify-center">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </div>

          <div className="mt-5 text-center">
            <h1 className="text-xl">title</h1>
            <h2>
              Dolore consectetur eiusmod proident
              <br />
              anim aliquip amet laboris aliquip.
              <br />
            </h2>
            <figure className="mt-5 flex justify-center">
              <Image
                src={serviceIcon}
                width={40}
                height={40}
                alt="hero image"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
