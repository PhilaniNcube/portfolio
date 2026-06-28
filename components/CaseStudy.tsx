import FadeIn from './FadeIn';

const challenges = [
  {
    title: 'Media Handling at Scale',
    description:
      'The client needed a reliable system for bulk image uploads, alongside automated image cropping fixes to ensure optimal gallery displays without heavy manual intervention.',
  },
  {
    title: 'Secure Payment Integration',
    description:
      'The business required a compliant, secure checkout process integrated via the Paygate payment gateway to handle customer transactions reliably.',
  },
  {
    title: 'Communication Infrastructure',
    description:
      'A seamless transition of contact emails was required to ensure uninterrupted client support during the platform overhaul.',
  },
];

const solutions = [
  {
    title: 'Optimized Upload Architecture',
    description:
      'Engineered a streamlined bulk-upload workflow tailored for high-resolution school portraits. This included resolving legacy image cropping issues, allowing the client to batch-process galleries and drastically reduce administrative overhead.',
  },
  {
    title: 'Paygate Gateway Configuration',
    description:
      'Navigated the technical documentation and compliance requirements to successfully provision and test the Paygate payment gateway. This ensured that parents and schools could process payments securely and reliably, meeting all necessary banking and operational requirements.',
  },
  {
    title: 'Zero-Downtime Migration',
    description:
      'Managed the contact email transition alongside the technical deployment to guarantee that client communications remained active and professionally routed throughout the launch phase.',
  },
];

export default function CaseStudy() {
  return (
    <section id="work" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600">
            Project Case Study
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            High-Volume E-Commerce for a School Photography Platform
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            A specialized school photography business required a robust digital
            infrastructure to handle massive influxes of media and process secure
            transactions. The project demanded a custom approach to manage the
            unique workflow of uploading, managing, and selling large batches of
            high-resolution photos efficiently.
          </p>
        </FadeIn>

        <div className="mt-20">
          <FadeIn>
            <h3 className="text-xl font-semibold text-slate-900">
              The Challenge
            </h3>
          </FadeIn>
          <div className="mt-8 space-y-8">
            {challenges.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <FadeIn>
            <h3 className="text-xl font-semibold text-slate-900">
              The Solution
            </h3>
          </FadeIn>
          <div className="mt-8 space-y-8">
            {solutions.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="border-l-2 border-blue-500 pl-6">
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-slate-900 p-10">
          <FadeIn>
            <h3 className="text-xl font-semibold text-white">The Impact</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              The final platform bridges the gap between complex backend
              requirements and a seamless user experience. The client can now
              effortlessly manage massive image repositories, while end-users
              navigate a smooth, trustworthy checkout process backed by a robust
              payment gateway infrastructure.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}