import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600">
            Web Developer
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            Philani Ncube
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-xl md:text-2xl text-slate-600 leading-relaxed">
            Architecting robust digital solutions &mdash; from custom payment
            gateways to high-volume e-commerce platforms.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              View Case Study
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}