import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, Hammer, Sofa, Ruler, ClipboardCheck, Key, Wrench } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Residential, Commercial & Turnkey Construction | iSquare" },
      { name: "description", content: "Full-spectrum construction services: residential builds from ₹2000/sq.ft, commercial projects, interiors, renovations and turnkey solutions." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, title: "Residential Construction", desc: "Custom homes from ₹2000/sq.ft with 250+ quality checks and a 10-year structural warranty." },
  { icon: Building2, title: "Commercial Construction", desc: "Offices, retail and institutional buildings delivered on schedule with zero compromise." },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Modernize, expand or restore — structural, electrical, plumbing and aesthetic upgrades." },
  { icon: Sofa, title: "Interior Works", desc: "Modular kitchens, wardrobes, false ceilings and bespoke joinery executed by senior crews." },
  { icon: Ruler, title: "Structural Engineering", desc: "Robust structural design and soil-tested foundations using ARS 550D TMT and premium cement." },
  { icon: ClipboardCheck, title: "Project Management", desc: "Single point of accountability from blueprint to handover with weekly progress reports." },
  { icon: Key, title: "Turnkey Solutions", desc: "We handle everything — design, permits, build, interiors, handover. You move in." },
  { icon: Wrench, title: "Custom Building Solutions", desc: "Industrial sheds, farmhouses, villas and one-off architectural projects." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="End-to-end construction expertise." image={hero} />
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 50} className="bg-background">
                <div className="p-10 h-full group hover:bg-foreground hover:text-background transition-colors duration-500">
                  <s.icon className="h-12 w-12 text-accent" />
                  <h3 className="mt-6 text-2xl font-display font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">{s.desc}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                    Inquire <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
