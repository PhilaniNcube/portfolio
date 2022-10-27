import Image from "next/image";
import { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <section className="relative isolate pt-28 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-2 flex flex-col justify-center">
              <h1 className="font-serif text-slate-700 text-3xl md:text-5xl font-medium">
                Building websites that convert users into{" "}
                <span className="font-bold underline">customers</span>
              </h1>
            </div>
            <Image
              src="/images/web_development.jpg"
              width={6000}
              height={4000}
              alt="Web Dev"
              className="w-full object-cover hidden md:block rounded-2xl md:col-span-2"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Hero;
