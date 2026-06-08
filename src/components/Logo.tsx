import logo from "@/assets/isquare-logo.jpg";

export function Logo({ className = "h-10 w-10", showText = true, light = false }: { className?: string; showText?: boolean; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="iSquare Construction logo" className={`${className} rounded-md object-cover`} width={64} height={64} />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>iSquare</span>
          <span className={`text-[10px] uppercase tracking-[0.25em] ${light ? "text-white/70" : "text-muted-foreground"}`}>Construction</span>
        </div>
      )}
    </div>
  );
}
