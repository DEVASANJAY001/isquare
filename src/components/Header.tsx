import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Every page starts with a dark hero/PageHeader. When un-scrolled, use light text everywhere for legibility.
  const lightMode = !scrolled && !open;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo light={lightMode} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative group ${
                  lightMode ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"
                } ${active ? (lightMode ? "text-white" : "text-foreground") : ""}`}
              >
                {item.label}
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-accent origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:9789449019" className={`flex items-center gap-2 text-sm font-medium ${lightMode ? "text-white" : "text-foreground"}`}>
            <Phone className="h-4 w-4 text-accent" />
            97894 49019
          </a>
          <Link to="/contact" className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-accent/90 transition-colors">
            Get a Quote
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ${lightMode ? "text-white" : "text-foreground"}`} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background animate-fade-in">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="py-3 text-base font-medium border-b border-border/50 text-foreground">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-4 bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold uppercase tracking-wider text-center">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
