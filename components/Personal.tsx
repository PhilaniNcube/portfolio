import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { RiFileTextLine } from "react-icons/ri";

const Personal = () => {
  return (
    <Fragment>
      <section className="relative py-12 isolate">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl text-slate-700 font-medium">About Me</h2>
              <p className="text-base text-slate-600 font-mono mt-3">
                I have always loved technology and the internet from the first time I connected to the worl wide web using a dial-up modem.
              </p>
              <p className="text-base text-slate-600 font-mono">
                I have developed a passion for web development because it allows me to help people bring their ideas to life in a creative way that can provide material benefit to them.
              </p>
              <p className="text-base text-slate-600 font-mono">
                I am now currently looking to <span className="font-extrabold">join</span> an new team that I can be a valuable member of. Given the opportunity to contribute to a team I can bring my experience from the different positions that I have been in, in my working and freelance career up to now.
              </p>

              <Link href="/documents/Philani_Ncube_CV.pdf" className="flex py-2 mt-4 max-w-sm rounded bg-blue-600 text-white w-fit  items-center">
                <span><RiFileTextLine className="h-8 w-8 p-1 border-r-2 border-white" /></span>
                <p className="px-4 font-mono">Download My CV</p>
              </Link>

            </div>

            <div className="flex flex-col items-center justify-center md:col-span-2 w-full">
              <Image
                src="/images/square.jpg"
                width={408}
                height={612}
                alt="Web Dev"
                className="w-full md:w-1/2 mx-auto object-cover aspect-square rounded-full md:col-span-2"
              />
              <p className="text-center font-mono font-extrabold text-slate-700 text-2xl">Philani Ncube</p>
              <p className="text-center font-mono font-extrabold text-slate-700 text-md">From Zimbabwe</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Personal;
