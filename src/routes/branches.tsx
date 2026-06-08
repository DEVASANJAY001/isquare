import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, ArrowRight, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/brand/IMG-20260608-WA0011.jpg.asset.json";
import { branches } from "@/data/branches";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — iSquare Construction Across Tamil Nadu" },
      { name: "description", content: "iSquare Construction operates across Chennai, Coimbatore, Madurai, Trichy and Bengaluru with dedicated sub-branches and project offices in each city." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Network"
        title="Branches & sub-branches across South India."
        subtitle="Five city head-offices and 22+ project hubs — local teams, central quality standards, single point of accountability."
        image={hero.url}
      />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8 text-center">
          {[
            { n: "5", l: "City Head Offices" },
            { n: "22+", l: "Sub-Branches" },
            { n: "250+", l: "Projects Delivered" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-5xl font-display font-bold text-accent">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
          {branches.map((b, i) => (
            <Reveal key={b.slug} delay={i * 80}>
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5 relative overflow-hidden aspect-[4/3]">
                  <img src={b.image} alt={`${b.city} branch`} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent">{b.region}</span>
                    <h2 className="text-3xl font-display font-bold mt-1">{b.city}</h2>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <span>{b.address}</span>
                  </div>
                  <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                    <Phone className="h-4 w-4 text-accent" /> {b.phone}
                  </a>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{b.intro}</p>

                  <h3 className="mt-8 text-xs uppercase tracking-[0.3em] text-accent font-semibold">Sub-Branches</h3>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {b.subBranches.map((sb) => (
                      <div key={sb.name} className="border border-border p-4 hover:border-accent transition-colors">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-accent" />
                          <span className="font-semibold text-sm">{sb.name}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{sb.area}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/branches/$slug"
                    params={{ slug: b.slug }}
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest border-b-2 border-accent pb-1 hover:gap-5 transition-all"
                  >
                    View Branch <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
