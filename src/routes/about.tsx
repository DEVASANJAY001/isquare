import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about-team.jpg";
import hero from "@/assets/hero-construction.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About iSquare Construction — Our Story, Mission & Values" },
      { name: "description", content: "Meet iSquare Construction — 15+ years of building trust through precision engineering, premium materials and transparent practices." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Integrity First", d: "Transparent pricing, honest timelines, and no hidden charges. Ever." },
  { t: "Engineered Quality", d: "250+ standard quality checks at every stage of construction." },
  { t: "Client Partnership", d: "We treat every project as a long-term relationship, not a transaction." },
  { t: "Craftsmanship", d: "Skilled crews and premium materials — built to last decades." },
];

const timeline = [
  { y: "2010", t: "Founded", d: "iSquare Construction begins with a small team and a big promise." },
  { y: "2015", t: "100th Project", d: "Crossed 100 successfully delivered residential and commercial builds." },
  { y: "2020", t: "Turnkey Division", d: "Launched end-to-end turnkey solutions including interiors." },
  { y: "2026", t: "250+ Projects", d: "Trusted across Chennai with a 10-year structural warranty." },
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Building trust, one structure at a time." image={hero} />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={about} alt="iSquare engineer" className="w-full h-[600px] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={150}>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Story</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">From foundation to finish, with one promise.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              iSquare Construction was founded with a simple belief: a building is a promise made physical. For over 15 years we've kept that promise across hundreds of homes, offices and commercial spaces — combining structural rigor with premium materials and elegant detail.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold">Vision</h3>
                <p className="text-muted-foreground mt-2">To be South India's most trusted construction partner — known for craftsmanship, transparency and engineered excellence.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Mission</h3>
                <p className="text-muted-foreground mt-2">Deliver every project on time, on budget, and beyond expectations — backed by lifetime service support.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Core Values</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold">The principles that guide every build.</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="bg-background p-8 h-full border-t-2 border-accent">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 text-lg font-display font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Milestones</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold">Our journey so far.</h2>
            </div>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((e, i) => (
              <Reveal key={e.y} delay={i * 100}>
                <div className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="text-4xl font-display font-bold text-accent">{e.y}</div>
                    <h3 className="mt-2 text-xl font-display font-bold">{e.t}</h3>
                    <p className="mt-2 text-muted-foreground">{e.d}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
