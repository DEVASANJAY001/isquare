import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Building2, Home, Hammer, Sofa, Ruler, ClipboardCheck, ShieldCheck, Award, Star } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import villa from "@/assets/project-villa.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";
import about from "@/assets/about-team.jpg";
import b02 from "@/assets/brand/IMG-20260608-WA0002.jpg.asset.json";
import b03 from "@/assets/brand/IMG-20260608-WA0003.jpg.asset.json";
import b07 from "@/assets/brand/IMG-20260608-WA0007.jpg.asset.json";
import b08 from "@/assets/brand/IMG-20260608-WA0008.jpg.asset.json";
import b09 from "@/assets/brand/IMG-20260608-WA0009.jpg.asset.json";
import b11 from "@/assets/brand/IMG-20260608-WA0011.jpg.asset.json";
import b12 from "@/assets/brand/IMG-20260608-WA0012.jpg.asset.json";
import b22 from "@/assets/brand/IMG-20260608-WA0022.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iSquare Construction — Building Excellence. Creating Trust." },
      { name: "description", content: "Premium construction services in Chennai. Residential, commercial, interiors and turnkey solutions starting from ₹2000/sq.ft with a 10-year warranty." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Residential Construction", desc: "Custom homes designed and built to your lifestyle, with premium finishes throughout." },
  { icon: Building2, title: "Commercial Projects", desc: "Office complexes, retail and institutional builds delivered on schedule." },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Transform existing spaces with structural, aesthetic and functional upgrades." },
  { icon: Sofa, title: "Interior Works", desc: "Modular interiors, false ceilings, and bespoke joinery with elegant detailing." },
  { icon: Ruler, title: "Structural Engineering", desc: "Robust structural design backed by 250+ standard quality checks." },
  { icon: ClipboardCheck, title: "Turnkey Solutions", desc: "End-to-end project management from blueprint to handover, single point of accountability." },
];

const projects = [
  { img: villa, tag: "Residential", title: "Coastal Modern Villa" },
  { img: commercial, tag: "Commercial", title: "Glass Tower Office" },
  { img: interior, tag: "Interiors", title: "Luxury Living Suite" },
];

function useCounter(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            setValue(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { value, ref };
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const c = useCounter(value);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
        <span ref={c.ref}>{c.value}</span>{suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="iSquare construction site at golden hour" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl text-white">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 backdrop-blur-sm text-xs uppercase tracking-[0.3em]">
                <span className="h-1.5 w-1.5 bg-accent rounded-full" /> Trusted Builders Since 2010
              </span>
            </div>
            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] text-balance animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Building Excellence. <span className="text-accent italic">Creating Trust.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.45s", animationFillMode: "both" }}>
              Premium residential and commercial construction backed by 250+ quality checks, transparent pricing and a 10-year structural warranty.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              <Link to="/contact" className="group bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest inline-flex items-center gap-3 hover:bg-accent/90 transition-all">
                Get a Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="border border-white/40 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors">
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] animate-fade-in" style={{ animationDelay: "1.2s" }}>
          Scroll to explore
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={about} alt="Engineer reviewing blueprints" className="w-full h-[560px] object-cover" loading="lazy" />
              <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 hidden md:block">
                <div className="text-5xl font-display font-bold">15+</div>
                <div className="text-xs uppercase tracking-widest mt-1">Years of Craft</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">About iSquare</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight text-balance">
                A construction partner built on precision and integrity.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                iSquare Construction delivers thoughtfully engineered residential and commercial projects across Chennai. From custom homes starting at ₹2000/sq.ft to large-scale developments, every build is supervised by senior engineers and finished with materials from Ramco, Dalmia, ARS 550D, Parryware, Asian Paints and Polycab.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {["100% Money Safety Guarantee","250+ Quality Checks","Transparent Pricing","10-Year Warranty"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <ShieldCheck className="h-5 w-5 text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest border-b-2 border-accent pb-1 hover:gap-5 transition-all">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">What We Build</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight text-balance">
                Comprehensive construction services, executed end-to-end.
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className="bg-background">
                <div className="p-10 h-full group hover:bg-foreground hover:text-background transition-colors duration-500 cursor-pointer">
                  <s.icon className="h-10 w-10 text-accent" />
                  <h3 className="mt-6 text-xl font-display font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-12">
          <Reveal><Stat value={250} suffix="+" label="Projects Delivered" /></Reveal>
          <Reveal delay={100}><Stat value={15} suffix="+" label="Years Experience" /></Reveal>
          <Reveal delay={200}><Stat value={100} suffix="%" label="Safety Guarantee" /></Reveal>
          <Reveal delay={300}><Stat value={10} suffix="yr" label="Warranty" /></Reveal>
        </div>
      </section>

      {/* PROMISE POSTERS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Promise</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight text-balance">
                Premium materials. Smart process. Lifetime trust.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every iSquare home is built with branded materials, watched live via 24/7 CCTV, and protected by a 10-year structural warranty.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: b02.url, t: "A Strong Future", d: "Custom plans, trusted contractors, smart tracking and transparent pricing." },
              { img: b03.url, t: "Build For Generations", d: "Premium materials with 24/7 live construction monitoring." },
              { img: b08.url, t: "Smart Technologies", d: "Starts ₹2000/sq.ft with 250+ quality checks and 10-year warranty." },
              { img: b09.url, t: "Multi-Tasking Process", d: "Planning, foundation, framing, flooring, plumbing and finishing — managed in parallel." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="group bg-background overflow-hidden border border-border hover:border-accent transition-colors h-full">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={c.img} alt={c.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS STRIP */}
      <section className="relative overflow-hidden">
        <img src={b07.url} alt="Brand materials we use — KAG, ARS 550D, Asian Paints, Parryware, Ramco, Polycab" className="w-full h-auto block" loading="lazy" />
      </section>

      {/* DOUBLE ADVANTAGE */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={b11.url} alt="iSquare Construction double advantage" className="w-full aspect-square object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Double Advantage</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">
                100% money safety + 250+ quality checks.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Two guarantees that protect your investment from blueprint to handover — your money stays safe in escrow milestones, and every stage clears a strict quality scorecard before progressing.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {["Money Safety Guarantee","250+ Quality Checks","No Hidden Charges","Lifetime Service Support"].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 bg-accent rounded-full" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Follow Us</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">
                Let's build amazing homes together.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Follow iSquare Construction on Instagram and Facebook for inspiration, walkthroughs and construction expertise.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-widest">@isquare_construction</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src={b12.url} alt="Follow iSquare Construction" className="w-full aspect-square object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* MODERN HOUSE FOR SALE */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-3">
            <img src={b22.url} alt="Modern house for sale by iSquare" className="w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Featured Listing</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">
                Modern house for sale.
              </h2>
              <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
                {[["3","Bedrooms"],["2","Bathrooms"],["Modular","Kitchen"],["Covered","Car Garage"]].map(([n,l]) => (
                  <li key={l} className="border border-white/15 p-4">
                    <div className="font-display text-2xl font-bold text-accent">{n}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{l}</div>
                  </li>
                ))}
              </ul>
              <a href="tel:9789449019" className="mt-8 inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest">
                Enquire Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>



      {/* PROJECTS */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Featured Work</span>
                <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">
                  Recent projects that define our craft.
                </h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest border-b-2 border-accent pb-1 self-start">
                All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent">{p.tag}</span>
                    <h3 className="mt-2 text-2xl font-display font-bold text-white">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Client Voices</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">What our clients say.</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { q: "iSquare delivered our home on time and on budget. The quality of finishes is exceptional.", n: "Ramesh K.", r: "Villa Owner, Anna Nagar" },
              { q: "Transparent pricing and zero surprises. Their team treats every detail like their own.", n: "Priya S.", r: "Apartment Project, OMR" },
              { q: "From planning to handover, the process felt premium. The 250+ quality checks are real.", n: "Anand V.", r: "Commercial Build, Guindy" },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 120}>
                <div className="p-10 border border-border h-full hover:border-accent transition-colors">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-6 text-lg font-display italic leading-relaxed">"{t.q}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold">{t.n}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{t.r}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center text-white">
          <Award className="h-12 w-12 text-accent mx-auto" />
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-tight text-balance">
            Ready to build something remarkable?
          </h2>
          <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
            Get a free consultation and detailed quote within 24 hours. No hidden charges. Lifetime service support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors">
              Get Free Quote
            </Link>
            <a href="tel:9789449019" className="border border-white/40 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Call 97894 49019
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
