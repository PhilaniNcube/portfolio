import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600">
            About Me
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Bridging infrastructure and experience
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a web developer who bridges the gap between technical
              infrastructure and seamless user experiences. My expertise lies in
              architecting robust digital solutions&mdash;whether that means
              structuring comprehensive web platforms for multifaceted business
              units, integrating custom payment gateways, or provisioning Google
              Cloud Platform for advanced server-side analytics.
            </p>
            <p>
              From executing high-level server restorations to resolving
              intricate NextJS tracking anomalies, I partner with businesses to
              ensure their digital presence is fast, secure, and fully optimized
              for conversion.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}