import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Building2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { branches, getBranch, type Branch } from "@/data/branches";

export const Route = createFileRoute("/branches/$slug")({
  loader: ({ params }) => {
    const branch = getBranch(params.slug);
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.branch.city} Branch — iSquare Construction` },
          { name: "description", content: `iSquare Construction ${loaderData.branch.city} office and its sub-branches. ${loaderData.branch.intro}` },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-display font-bold">Branch not found</h1>
        <Link to="/branches" className="mt-6 inline-flex items-center gap-2 text-accent font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to all branches
        </Link>
      </div>
    </div>
  ),
  component: BranchDetail,
});

function BranchDetail() {
  const { branch } = Route.useLoaderData() as { branch: Branch };
  const others = branches.filter((b) => b.slug !== branch.slug);

  return (
    <>
      <PageHeader
        eyebrow={branch.region}
        title={`${branch.city} Branch`}
        subtitle={branch.intro}
        image={branch.image}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">About this branch</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold leading-tight">
                  Local expertise. iSquare standards.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Established in {branch.established}, our {branch.city} team operates under the same engineering, quality and procurement protocols as our head office — including 250+ standard checks, branded materials and transparent pricing.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Specialties</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {branch.specialties.map((s) => (
                    <span key={s} className="px-4 py-2 text-sm border border-border bg-secondary">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Sub-Branches & Project Offices</h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {branch.subBranches.map((sb) => (
                    <div key={sb.name} className="p-6 border border-border hover:border-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-accent" />
                        <h4 className="font-display text-lg font-bold">{sb.name}</h4>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{sb.area}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                        <ShieldCheck className="h-3 w-3" /> Operational
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <div className="bg-foreground text-background p-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Contact</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {branch.address}</li>
                <li className="flex gap-3"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></li>
                <li className="flex gap-3"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> <a href={`mailto:${branch.email}`}>{branch.email}</a></li>
              </ul>
              <Link to="/contact" className="mt-8 block w-full text-center bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold uppercase tracking-widest">
                Request a Quote
              </Link>
            </div>

            <div className="border border-border p-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Other branches</h3>
              <ul className="mt-5 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to="/branches/$slug" params={{ slug: o.slug }} className="flex items-center justify-between text-sm hover:text-accent transition-colors">
                      <span className="font-semibold">{o.city}</span>
                      <span className="text-xs text-muted-foreground">{o.subBranches.length} sub-branches</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
