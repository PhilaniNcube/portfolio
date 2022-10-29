import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiPinDistanceLine, RiTwitterFill, RiWhatsappLine } from "react-icons/ri";

const contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact | Philani Ncube</title>
      </Head>

      <main className="grid grid-cols-3 font-mono h-screen">
        <div className="w-full bg-blue-600 p-8 hidden md:col-span-1 md:flex items-end">
          <div className="flex justify-around w-full items-center">
            <Link
              href="https://github.com/PhilaniNcube"
              className="h-12 w-12 text-slate-100"
            >
              <RiGithubFill className="h-12 w-12 text-slate-100 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="https://twitter.com/PhilaniNcube15"
              className="h-12 w-12 text-slate-100"
            >
              <RiTwitterFill className="h-12 w-12 text-slate-100 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/philani-ncube-64aa3914a/"
              className="h-12 w-12 text-slate-100"
            >
              <RiLinkedinBoxFill className="h-12 w-12 text-slate-100 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 p-12">
          <div className="w-full">
            <div className="py-12 px-6">
              <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold text-slate-800 text-center">
                  Contact Me
                </h1>
                <p className="text-base leading-normal text-slate-600 mt-5 text-center ">
                  I am currently looking for new opportunities. I am happy to
                  become a globe trotter so relocation is not a problem. If you
                  like what you see please don't hesitate to drop me a message
                  via email, whatsapp or even twitter. Right now I am living in Port Elizabeth, South Africa but I am a Zimbabwean citizen.
                </p>

                <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-6">
                  <div className="bg-white border rounded-md border-slate-200 h-64 flex flex-col items-center">
                    <div
                      className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                      role="img"
                      aria-label="phone number"
                    >
                      <RiWhatsappLine className="h-12 w-12 text-blue-600" />
                    </div>
                    <p className="text-xl mt-10 font-semibold leading-5 text-center text-slate-800">
                      Phone
                    </p>
                    <p className="text-base mt-4 leading-4 text-center text-slate-600">
                      +27 81 755 1279
                    </p>
                  </div>
                  <div className="bg-white border rounded-md border-slate-200 h-64 flex flex-col items-center ">
                    <div
                      className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center "
                      role="img"
                      aria-label="email"
                    >
                      <RiMailLine className="h-12 w-12 text-blue-600" />
                    </div>
                    <p className="text-xl mt-10 font-semibold leading-5 text-center text-slate-800">
                      Email
                    </p>
                    <p className="text-base mt-4 leading-4 text-center text-slate-600">
                      ncbphi001@gmail.com
                    </p>
                  </div>
                  <div className="bg-white border rounded-md border-slate-200 h-64 flex flex-col items-center ">
                    <div
                      className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                      role="img"
                      aria-label="location"
                    >
                      <RiPinDistanceLine className="h-12 w-12 text-blue-600" />
                    </div>
                    <p className="text-xl mt-10 font-semibold leading-5 text-center text-slate-800">
                      Location
                    </p>
                    <p className="text-base mt-4 leading-6 text-center text-slate-600 w-48">
                      Port Elizabeth, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default contact;
