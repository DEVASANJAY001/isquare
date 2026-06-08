import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.14_0.01_60)] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Logo light />
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Building excellence and creating trust. Premium construction solutions delivered with quality materials and 250+ standard quality checks.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[["Home","/"],["About Us","/about"],["Services","/services"],["Projects","/projects"],["Contact","/contact"]].map(([l,t]) => (
              <li key={t}><Link to={t} className="hover:text-accent transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Interior Works</li>
            <li>Renovation & Remodeling</li>
            <li>Turnkey Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>97894 49019<br/>90031 33987</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /><a href="mailto:info@isquareconstruction.com" className="hover:text-accent">info@isquareconstruction.com</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>Chennai, Tamil Nadu, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} iSquare Construction. All Rights Reserved.</span>
          <span>Crafted with precision. Built to last.</span>
          <span class="text-gray-300">
  Designed and developed By
  <a
    href="https://davns.com"
    target="_blank"
    rel="noopener noreferrer"
    class="ml-1 font-semibold text-white hover:text-blue-300 transition-colors"
  >
    Davns Industries
  </a>
</span>
        </div>
      </div>
    </footer>
  );
}
