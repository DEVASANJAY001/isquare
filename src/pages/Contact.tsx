import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Contact() {
  usePageMeta(
    "Contact iSquare Construction — Get a Free Quote",
    "Reach iSquare Construction for a free consultation and detailed quote within 24 hours. Call 97894 49019 or fill our enquiry form."
  );
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build something remarkable together." image={hero} />
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
          <Reveal className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Reach Us</span>
            <h2 className="mt-4 text-4xl font-display font-bold leading-tight">We respond within 24 hours.</h2>
            <p className="mt-4 text-muted-foreground">Whether you're planning a new home or a commercial development, our team is ready to help.</p>
            <ul className="mt-10 space-y-6">
              {[
                { Icon: Phone, label: "Phone", val: "97894 49019 / 90031 33987", href: "tel:9789449019" },
                { Icon: Mail, label: "Email", val: "info@isquareconstruction.com", href: "mailto:info@isquareconstruction.com" },
                { Icon: MapPin, label: "Office", val: "Chennai, Tamil Nadu, India" },
                { Icon: Clock, label: "Hours", val: "Mon–Sat · 9:00 AM – 7:00 PM" },
              ].map(({ Icon, label, val, href }) => (
                <li key={label} className="flex gap-5">
                  <div className="h-12 w-12 shrink-0 bg-accent/10 text-accent flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    {href ? <a href={href} className="font-medium hover:text-accent">{val}</a> : <div className="font-medium">{val}</div>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-foreground text-background">
              <div className="text-xs uppercase tracking-widest text-accent">Emergency Contact</div>
              <div className="mt-2 font-display text-2xl font-bold">+91 97894 49019</div>
              <div className="text-xs text-background/70 mt-1">24/7 site emergency support</div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-secondary p-10 md:p-12 space-y-6"
            >
              <h3 className="font-display text-2xl font-bold">Request a Quote</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Project Type" name="type" placeholder="Residential / Commercial / Interior" />
                <Field label="Location" name="location" placeholder="City, area" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea name="message" rows={5} required className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-accent outline-none transition-colors resize-none" />
              </div>
              <button type="submit" className="bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest inline-flex items-center gap-3 hover:bg-accent/90 transition-colors">
                {submitted ? "Thank you — we'll be in touch" : <>Send Enquiry <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-0">
        <div className="aspect-[21/9] w-full">
          <iframe
            title="iSquare Construction Office"
            src="https://www.google.com/maps?q=Chennai,India&output=embed"
            className="w-full h-full border-0 grayscale"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-accent outline-none transition-colors"
      />
    </div>
  );
}
