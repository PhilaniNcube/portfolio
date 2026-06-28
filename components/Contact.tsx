import FadeIn from './FadeIn';
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiPinDistanceLine, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri';

const contactDetails = [
  {
    icon: <RiWhatsappLine className="h-6 w-6 text-blue-600" />,
    label: 'Phone',
    value: '+27 81 755 1279',
  },
  {
    icon: <RiMailLine className="h-6 w-6 text-blue-600" />,
    label: 'Email',
    value: 'ncbphi001@gmail.com',
  },
  {
    icon: <RiPinDistanceLine className="h-6 w-6 text-blue-600" />,
    label: 'Location',
    value: 'Port Elizabeth, South Africa',
  },
];

const socials = [
  { icon: <RiGithubFill className="h-6 w-6" />, href: 'https://github.com/PhilaniNcube' },
  { icon: <RiTwitterFill className="h-6 w-6" />, href: 'https://twitter.com/PhilaniNcube15' },
  { icon: <RiLinkedinBoxFill className="h-6 w-6" />, href: 'https://www.linkedin.com/in/philani-ncube-64aa3914a/' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600">
            Contact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Let&apos;s build something
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            I am currently looking for new opportunities. I am happy to become a
            globe trotter so relocation is not a problem. If you like what you
            see please don&apos;t hesitate to drop me a message.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 p-6"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-medium text-slate-500">
                    {item.label}
                  </span>
                </div>
                <p className="mt-3 text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}