import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";

const Main = () => {
  return (
    <section className="pt-28 max-w-7xl grid grid-cols-2 mx-auto px-4">
      <div className="w-full flex flex-col col-span-2 md:col-span-1 justify-center ">
        <p className="text-sm font-serif text-slate-600">My name is </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-blue-600 ">
          Philani Ncube.
        </h2>
        <h1 className="text-2xl md:text-4xl md:pr-32 pr-10 font-bold  text-slate-700">
          My goal is to build websites that turn users into customers
        </h1>
        <p className="text-base text-slate-600 w-full font-mono pr-8 md:pr-44 mt-4">
          I am a self taught front end developer. I have been helping my clients
          bring their businesses into the digital age. In many cases this has
          been the first time their businesses have been online. I pride myself
          not, only in helping my clients reach new customers, but I help
          educate them on the opportunities that the web can provide them.
        </p>
        <Link href="/projects">
        <button className="max-w-xs w-md px-10 font-bold font-mono rounded bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 mt-2">
          My Projects
        </button>
        </Link>

        <div className="flex mt-4 max-w-sm justify-start items-center">
          <Link
            href="https://github.com/PhilaniNcube"
            className="h-12 w-12 text-gray-700"
          >
            <RiGithubFill className="h-12 w-12 text-gray-700 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300" />
          </Link>
          <Link
            href="https://twitter.com/PhilaniNcube15"
            className="h-12 w-12 text-gray-700"
          >
            <RiTwitterFill className="h-12 w-12 text-gray-700 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/philani-ncube-64aa3914a/"
            className="h-12 w-12 text-gray-700"
          >
            <RiLinkedinBoxFill className="h-12 w-12 text-gray-700 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300" />
          </Link>
        </div>
      </div>
      <Image
        src="/images/web_development.jpg"
        width={6000}
        height={4000}
        alt="Web Dev"
        className="w-full h-full object-cover col-span-2 md:col-span-1 rounded-2xl "
      />
    </section>
  );
};
export default Main;
