import {
  DiWordpress,
  DiMagento,
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiReact,
} from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiTypescript, SiPostgresql, SiMongodb, SiApollographql } from "react-icons/si";
import { RiPlayMiniFill } from "react-icons/ri";
import {
  useInView,
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";






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
      let newScrollYBounded = scrollYBounded.get() - diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export type TimelineType = {
  id: number;
  date: string;
  technology: string;
  details: string;
  icon: JSX.Element[];
}


const Timeline = () => {
  const myTimeline: TimelineType[] = [
    {
      id: 1,
      date: "2016 - 2017",
      technology: "Wordpress",
      details:
        "I started getting interested in web development and started playing around with Wordpress. I was attracted to the low barrier to entry because at first it seemed I did not need to know any actual programming language to start",
      icon: [<DiWordpress className="h-6 w-6 text-blue-100" />],
    },
    {
      id: 2,
      date: "2017 - 2018",
      technology: "Magento, HTML, CSS",
      details:
        "As one of the more tech savy people working at the Bookshop I used to work at, I was tasked with managing our newly built Magento website. I was the one to speak to the developers we had contracted to build the website. It was also at this point that I started to learn HTML & CSS in order to make updates to our company website without having to contact the developers.",
      icon: [
        <DiMagento className="h-6 w-6 text-blue-100" />,
        <DiHtml5 className="h-6 w-6 text-blue-100" />,
        <DiCss3 className="h-6 w-6 text-blue-100" />,
      ],
    },
    {
      id: 3,
      date: "2017 - 2019",
      technology: "Javascript",
      details:
        "Once I had a grasp of HTML & CSS, the natural thin was to add Javascript to my toolbelt. It is as this point that I started to realise that web development was the career I wanted to pursue going forward. During this time I was also still managing our company Magento website and taking up more and more responsibility on updating the site ysing the Magento block editor. I also built out 2 Wordpress websites for other business units in our group of companies.",
      icon: [
        <DiMagento className="h-6 w-6 text-blue-100" />,
        <DiJsBadge className="h-6 w-6 text-blue-100" />,
      ],
    },
    {
      id: 4,
      date: "2020 - 2022",
      technology: "React, REST APIs, GraphQL",
      details:
        "At this point I started freelancing and the Covid19 hit which and the Bookstore I used to work for since 2014 closed down. There I went full-time as a freelancer. The first project I took was create a React based ecommerce store that served the same customers as the University Bookstore I used to work for. In working as a freelancer I started working with different REST APIs like SendGrid, Mailchimp & MongoDB",
      icon: [
        <DiReact className="h-6 w-6 text-blue-100" />,
        <TbApi className="h-6 w-6 text-blue-100" />,
        <SiApollographql className="h-6 w-6 text-blue-100" />,
      ],
    },
    {
      id: 5,
      date: "2021 - 2022",
      technology: "NextJS, Typescript",
      details:
        "At the begining of 2021 I decided to rewrite my ecommerce website with NextJS so that I could take advantage of better SEO and I moved from MongoDB to Supabase as the database. Since then Supabase/Postgres has been my pick for the backend & database technology for the freelance projects I have been taking on. I have also decided to use Typescript as the default language I use in my projects.",
      icon: [
        <SiTypescript className="h-6 w-6 text-blue-100" />,
        <SiPostgresql className="h-6 w-6 text-blue-100" />,
        <SiMongodb className="h-6 w-6 text-blue-100" />,
      ],
    },
  ];

  const container : MutableRefObject<HTMLElement | null> = useRef(null);

  return (
    <section ref={container} className="py-8 mt-24" id="journey">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-blue-600 font-medium font-mono text-center">
          My Web Development Journey
        </h2>
        <div className="mt-4 gap-3 max-w-4xl mx-auto overflow-x-hidden">
          {myTimeline?.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Timeline;
