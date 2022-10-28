import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import type { NextPage } from "next";
import { useEffect } from "react";
import { Fragment } from "react";

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

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
  let { scrollYBoundedProgress } = useBoundedScroll(500);
  let height = useTransform(scrollYBoundedProgress, [0, 1], [80, 50]);
  let opacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);
  let scale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.9]);

  return (
    <Fragment>

      <div className="mx-auto flex w-full max-w-7xl flex-1 overflow-hidden text-slate-600">
        <div className="z-10 flex-1">
          <motion.header
            style={{
              height,
              backgroundColor: useMotionTemplate`rgb(255,255,255 / ${useTransform(
                scrollYBoundedProgress,
                [0, 1],
                [1, 0.1]
              )})`,
            }}
            className="flex fixed inset-x-0 shadow-md backdrop-blur-md h-20"
          >
            <div className="mx-auto flex max-w-7xl px-4 w-full items-center justify-between ">
              <motion.p
                style={{ scale }}
                className="flex origin-left items-center text-xl font-semibold uppercase"
              >

                <span className="-ml-1 text-2xl tracking-[-.075em]">
                  Philani Ncube
                </span>
              </motion.p>
              <motion.nav
                style={{ opacity }}
                className="flex space-x-4 text-xs font-medium text-slate-400"
              >
                <a href="#">News</a>
                <a href="#">Sports</a>
                <a href="#">Culture</a>
              </motion.nav>
            </div>
          </motion.header>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
