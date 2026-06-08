import { useState } from "react";
import villa from "@/assets/project-villa.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";

import b08 from "@/assets/brand/IMG-20260608-WA0008.jpg";
import b22 from "@/assets/brand/IMG-20260608-WA0022.jpg";
import b16 from "@/assets/brand/IMG-20260608-WA0016.jpg";
import b06 from "@/assets/brand/IMG-20260608-WA0006.jpg";
import b11 from "@/assets/brand/IMG-20260608-WA0011.jpg";
import b03 from "@/assets/brand/IMG-20260608-WA0003.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { usePageMeta } from "@/lib/usePageMeta";

const projects = [
  { img: b08, cat: "Residential", title: "Smart Luxury Villa", loc: "ECR, Chennai" },
  { img: b06, cat: "Residential", title: "Modern Family Home", loc: "OMR, Chennai" },
  { img: b22, cat: "Interiors", title: "Modern House Interiors", loc: "Anna Nagar" },
  { img: b11, cat: "Commercial", title: "Township Development", loc: "Guindy, Chennai" },
  { img: b03, cat: "Residential", title: "Generational Dream Home", loc: "Velachery" },
  { img: b16, cat: "Residential", title: "Compact Premium Build", loc: "Porur" },
  { img: villa, cat: "Residential", title: "Coastal Modern Villa", loc: "ECR, Chennai" },
  { img: commercial, cat: "Commercial", title: "Glass Tower Office", loc: "Guindy, Chennai" },
  { img: interior, cat: "Interiors", title: "Luxury Living Suite", loc: "Anna Nagar" },
];

const categories = ["All", "Residential", "Commercial", "Interiors"];

export default function Projects() {
  usePageMeta(
    "Projects — iSquare Construction Portfolio",
    "Explore residential villas, commercial buildings and luxury interiors delivered by iSquare Construction across Chennai."
  );
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Projects that speak for themselves." image={b11} subtitle="Villas, commercial complexes and interiors delivered across South India." />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border transition-colors ${
                  filter === c ? "bg-foreground text-background border-foreground" : "bg-background border-border hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.title + i} delay={i * 80}>
                <div className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent">{p.cat}</span>
                    <h3 className="mt-2 text-2xl font-display font-bold text-white">{p.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{p.loc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
