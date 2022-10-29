import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {

  const projects = [
    {
      id: 1,
      href: "https://capegadgets.co.za",
      image: "/images/capegadgets.png",
      title: "Cape Gadgets",
      stack: ["NextJS", "Supabase", "Postgres", "Javascript", "TailwindCSS"],
      apis: [
        "Rest API",
        "Intellimali",
        "Google Analytics",
        "Facebook Conversions API",
      ],
      details:
        "This was a website I built when I lost my job at the start of the pandemic in 2020. The website is an ecommerce store catering to university students in South Africa. The website mostly sells electronic goods like laptops and cellphones as well as other consumer electronics",
      industry: "Ecommerce",
      challenges:
        "The main challenge I faced was how to interface with the payment gateway. The customers that we were serving use a special government funded wallet in order to pay for their goods and services. As such the documentation for the api was difficult to use and there was not much information on how to use it with React.",
    },
    {
      id: 2,
      href: "https://hotwater24.com",
      title: "Hotwater24",
      image: "/images/hotwater24.png",
      stack: ["NextJS", "Supabase", "Postgres", "Javascript", "TailwindCSS"],
      apis: [
        "Rest API",
        "Paygate",
        "Contentful",
        "Sendgrid",
        "Google Analytics",
        "Facebook Conversions API",
      ],
      details:
        "This is one of my freelance projects that I built from the ground up. The main aim with this website was help the customer generate leads from web traffic in order to get qualified leads so that the customer could sell LPG powered Geysers. The website also provides information about the right size of gas geyser should be installed in their home.",
      industry: "Marketing & Lead Generation",
      challenges:
        "A challenge with this website was to create a good multi-step form because the customer needs to provide a lot of information in order to generate an accurate cost estimate for their geyser installation",
    },
    {
      id: 3,
      href: "https://inkfinance.co.za",
      title: "Ink Finance",
      image: "/images/inkfinance.png",
      stack: ["NextJS", "Supabase", "Postgres", "Javascript", "TailwindCSS"],
      apis: ["Rest API", "Google Analytics", "Facebook Conversions API"],
      details:
        "This is a website for users looking for Cash Loans to apply by entering their personal details as well as submitting financial documents. The administrator of the website also has to be able to view these documets online in order to make the decisions about who to grant the loans to.",
      industry: "Lead Generation",
      challenges:
        "The main challenge on this website was storing the documents because each potential customer needed to submit numerous documents.",
    },
    {
      id: 4,
      href: "https://solarquest.co.za",
      image: "/images/solarquest.png",
      title: "Solarquest",
      stack: ["NextJS", "Supabase", "Postgres", "Typescript", "TailwindCSS"],
      apis: [
        "Rest API",
        "Pipedrive",
        "Google Analytics",
        "Facebook Conversions API",
      ],
      details:
        "This is a marketing & lead generation website so that customers can show their interest in installing Solar Power & Battery Backup solutions in their home or office. Once a customer has filled in the form to show their interest their details are saved in the Postgres database and then sent on into the Pipedrive CRM via the pipedrive API for the sales team to follow up.",
      industry: "Marketing & Lead Generation",
      challenges:
        "The challenges in this website was integrating the Pipedrive api but the documentation was quite helpful in this process since the documentation was quite good.",
    },
    {
      id: 5,
      href: "https://african-expressions.vercel.app/",
      title: "African Expressions",
      image: "/images/africanexpressions.png",
      stack: ["NextJS", "Supabase", "Postgres", "Javascript", "TailwindCSS"],
      apis: ["Rest API", "Mapbox API", "Google Maps API"],
      details:
        "This is a website to show the different types of wool that a the distributor has for sale to retailers. It also serves as a directory of where you can buy the wool from different retailers and it shows the reatailers contact info as well as their location on a Map",
      industry: "Marketing",
      challenges:
        "The challenge with this website was constructiing the filter for the defferent types of wools sold by distributor. The wools could be filtered by type, category  and stictching",
    },
    {
      id: 6,
      href: "https://www.scriptbeauty.co.za",
      image: "/images/scriptedbeauty.png",
      title: "Script Beauty",
      stack: ["NextJS", "Typescript", "TailwindCSS"],
      apis: ["Rest API"],
      details:
        "This is a marketing website for a service to be provided to social media influencers. The website is introducing the idea of help influencers get in touch with brands for promotional purposes",
      industry: "Marketing",
      challenges:
        "This one was a not so much a challenge as it was a simple marketing website without the need for too much functionality required yet.",
    },
    {
      id: 7,
      href: "https://art-gallery-sage.vercel.app/",
      image: "/images/artgallery.png",
      title: "Art Gallery",
      stack: ["NextJS", "Typescript", "TailwindCSS"],
      apis: ["None"],
      details:
        "This was a simple excercise on Frontend Mentor fo me to practise some skills in taking a design and then replicating it in my code.",
      industry: "Marketing",
      challenges:
        "The challenge with this site was in knowing how to deconstruct the website layout so that I could know what CSS to write and to make sure the responsive styles were right and resembled the design.",
    },
  ];


  return (
    <section className="py-28 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-4xl text-center text-slate-700">
          My Projects
        </h1>
        <article className="mt-4 w-full gap-4 lg:gap-20 grid grid-cols-4 ">
          {projects.map((project) => (
            <div
              className="col-span-4 md:col-span-2 lg:col-span-2"
              key={project.id}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full  aspect-video object-cover"
                width={1920}
                height={1000}
              />
              <div className="mt-2 w-full">
                <h3 className="text-xl font-bold text-slate-700">
                  {project.title}
                </h3>
                <span className="flex items-center justify-between">
                  <Link href={project.href} className="text-blue-600 text-xs">
                    {project.href}
                  </Link>
                  <p className="text-xs">{project.industry}</p>
                </span>
                <p className="mt-2 pb-2 text-sm">{project.details}</p>
                <hr className="py-3" />
                <span className="flex flex-col space-y-2">
                  <p className="text-md font-bold">Challenges:</p>
                  <p className="text-xs text-slate-600">{project.challenges}</p>
                </span>
                <div className="flex justify-between">
                  <span className="flex flex-col space-y-2">
                    <p className="text-md font-bold">Stack:</p>
                    <p className="text-xs text-slate-600">
                      {project.stack.map((item) => (
                        <pre>{item}</pre>
                      ))}
                    </p>
                  </span>

                  <span className="flex flex-col space-y-2">
                    <p className="text-md font-bold">APIs:</p>
                    <p className="text-xs text-slate-600">
                      {project.apis.map((item) => (
                        <pre>{item}</pre>
                      ))}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
export default MyProjects;
