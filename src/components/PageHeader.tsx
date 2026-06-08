export function PageHeader({ eyebrow, title, image, subtitle }: { eyebrow: string; title: string; image: string; subtitle?: string }) {
  return (
    <section className="relative h-[60vh] min-h-[460px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16 text-white">
        <span className="text-xs uppercase tracking-[0.4em] text-accent font-semibold animate-fade-in">{eyebrow}</span>
        <h1 className="mt-4 text-5xl md:text-7xl font-display font-bold leading-[1.05] text-balance max-w-4xl animate-fade-up">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-white/80 text-lg animate-fade-up">{subtitle}</p>}
      </div>
    </section>
  );
}
