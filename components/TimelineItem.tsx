import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { clamp, useBoundedScroll } from "./Header";
import { TimelineType } from "./Timeline";


type ComponentProps = {
  item: TimelineType,
  index: number
}

const TimelineItem = ({item, index}:ComponentProps) => {

  let { scrollYBoundedProgress, scrollYBounded } = useBoundedScroll(100);



  const itemRef = useRef(null)

  const { scrollY, scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end end"],
  });



  useEffect(() => {
    let yProgress = scrollYBounded.get();
    console.log(scrollYProgress.get());

    console.log(yProgress);
  }, [scrollYProgress]);



//  useEffect(() => {
//    return scrollY.onChange((latest) => {
//      console.log(`Page scroll on item: ${index}`, latest);
//    });
//  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateX: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      whileHover={{ backgroundColor: "rgb(37 99 235)" }}
      transition={{ duration: 0.8, delay: 0.1, delayChildren: 0.3 }}
      ref={itemRef}
      className="odd:clear-right hover:text-white group overflow-x-hidden odd:float-left even:float-right even:clear-left w-full md:w-2/3 my-8 bg-slate-800 rounded-lg shadow-lg p-4"
    >
      <h3 className="text-xl font-serif flex flex-col group-hover:text-white text-slate-200 font-bold">
        <span className="pr-2">{item.technology}</span>{" "}
        <span className="text-sm">{item.date}</span>
      </h3>
      <p className="font-mono mt-1 text-slate-100 group-hover:text-white text-base">
        {item.details}
      </p>
      <motion.div className="flex space-x-3 mt-2">
        {item.icon?.map((icon, i) => (
          <div className="group-hover:text-white" key={i}>{icon}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default TimelineItem;
