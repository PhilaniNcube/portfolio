import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Fragment } from 'react'

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds:number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0)
  let scrollYBoundedProgress = useTransform(scrollYBounded, [0, bounds], [0,1]);

  useEffect(() => {
    return scrollY.onChange((current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}




const Home: NextPage = () => {

let { scrollYBoundedProgress } = useBoundedScroll(300);
let height = useTransform(scrollYBoundedProgress, [0, 1], [80, 50]);
let opacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);
let scale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.9]);





  return (
    <Fragment>
      <Head>
        <title> Philani Ncube | Developer Portfolio </title>
      </Head>
      <div className="mx-auto flex w-full max-w-7xl flex-1 overflow-hidden text-slate-600">
        <div className="z-0 flex-1">
          <motion.header
            style={{ height, backgroundColor: useMotionTemplate`rgb(255,255,255 / ${useTransform(scrollYBoundedProgress, [0,1],[1,0.1])})` }}
            className="flex fixed inset-x-0 shadow-md backdrop-blur-md h-20"
          >
            <div className="mx-auto flex w-full items-center justify-between px-8">
              <motion.p style={{scale}} className="flex origin-left items-center text-xl font-semibold uppercase">
                <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">

                </span>
                <span className="-ml-1 text-2xl tracking-[-.075em]">
                  Philani Ncube
                </span>
              </motion.p>
              <motion.nav style={{opacity}} className="flex space-x-4 text-xs font-medium text-slate-400">
                <a href="#">News</a>
                <a href="#">Sports</a>
                <a href="#">Culture</a>
              </motion.nav>
            </div>
          </motion.header>

          <main className="px-8 pt-28">
            <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
            <div className="mt-8 space-y-6">
              {[...Array(2).keys()].map((i) => (
                <div key={i} className="space-y-2 text-sm">
                  <p className="h-4 w-5/6 rounded bg-slate-200" />
                  <p className="h-4 rounded bg-slate-200" />
                  <p className="h-4 w-4/6 rounded bg-slate-200" />
                </div>
              ))}
              <div className="h-64 rounded bg-slate-200"></div>
              {[...Array(90).keys()].map((i) => (
                <div key={i} className="space-y-2 text-sm">
                  <p className="h-4 w-5/6 rounded bg-slate-200" />
                  <p className="h-4 rounded bg-slate-200" />
                  <p className="h-4 w-4/6 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default Home
