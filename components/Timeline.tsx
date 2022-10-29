import {
  DiWordpress,
  DiMagento,
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiReact,
} from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { RiPlayMiniFill } from "react-icons/ri";

const Timeline = () => {
  const myTimeline = [
    {
      id: 1,
      date: "2016 - 2017",
      technology: "Wordpress",
      details:
        "I started getting interested in web development and started playing around with Wordpress. I was attracted to the low barrier to entry because at first it seemed I did not need to know any actual programming language to start",
      icon: [<DiWordpress className="h-6 w-6 text-blue-600" />],
    },
    {
      id: 2,
      date: "2017 - 2018",
      technology: "Magento, HTML, CSS",
      details:
        "As one of the more tech savy people working at the Bookshop I used to work at, I was tasked with managing our newly built Magento website. I was the one to speak to the developers we had contracted to build the website. It was also at this point that I started to learn HTML & CSS in order to make updates to our company website without having to contact the developers.",
      icon: [
        <DiMagento className="h-6 w-6 text-blue-600" />,
        <DiHtml5 className="h-6 w-6 text-blue-600" />,
        <DiCss3 className="h-6 w-6 text-blue-600" />,
      ],
    },
    {
      id: 3,
      date: "2017 - 2019",
      technology: "Javascript",
      details:
        "Once I had a grasp of HTML & CSS, the natural thin was to add Javascript to my toolbelt. It is as this point that I started to realise that web development was the career I wanted to pursue going forward. During this time I was also still managing our company Magento website and taking up more and more responsibility on updating the site ysing the Magento block editor. I also built out 2 Wordpress websites for other business units in our group of companies.",
      icon: [
        <DiMagento className="h-6 w-6 text-blue-600" />,
        <DiJsBadge className="h-6 w-6 text-blue-600" />,
      ],
    },
    {
      id: 4,
      date: "2020 - 2022",
      technology: "React, REST APIs",
      details:
        "At this point I started freelancing and the Covid19 hit which and the Bookstore I used to work for since 2014 closed down. There I went full-time as a freelancer. The first project I took was create a React based ecommerce store that served the same customers as the University Bookstore I used to work for. In working as a freelancer I started working with different REST APIs like SendGrid, Mailchimp & MongoDB",
      icon: [
        <DiReact className="h-6 w-6 text-blue-600" />,
        <TbApi className="h-6 w-6 text-blue-600" />,
      ],
    },
    {
      id: 5,
      date: "2021 - 2022",
      technology: "NextJS, Typescript",
      details:
        "At the begining of 2021 I decided to rewrite my ecommerce website with NextJS so that I could take advantage of better SEO and I moved from MongoDB to Supabase as the database. Since then Supabase/Postgres has been my pick for the backend & database technology for the freelance projects I have been taking on. I have also decided to use Typescript as the default language I use in my projects.",
      icon: [
        <SiTypescript className="h-6 w-6 text-blue-600" />,
        <SiPostgresql className="h-6 w-6 text-blue-600" />,
      ],
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-blue-600 font-medium text-center">
          My Web Development Journey
        </h2>
        <div className="mt-4 gap-3 max-w-4xl mx-auto">
          {myTimeline.map((item) => (
            <div
              key={item.id}
              className="odd:clear-right odd:float-left even:float-right even:clear-left w-full md:w-2/3 my-8 bg-slate-100 rounded-lg shadow-lg p-4"
            >
              <h3 className="text-xl font-serif flex items-center space-x-4 text-slate-600 font-bold">
                <span className="pr-2">{item.technology}</span> <RiPlayMiniFill className="h-4 w-4" /> {item.date}
              </h3>
              <p className="font-mono mt-1 text-slate-800 text-base">
                {item.details}
              </p>
              <div className="flex space-x-3 mt-2">
                {item.icon.map((icon, i) => (
                  <div key={i}>{icon}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Timeline;
