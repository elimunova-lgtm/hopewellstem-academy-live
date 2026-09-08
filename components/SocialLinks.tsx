import { socials } from "@/lib/site";

type Props = {
  variant?: "bar" | "footer";
  className?: string;
};

export default function SocialLinks({ variant = "bar", className = "" }: Props) {
  const base =
    "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5";
  const tone =
    variant === "bar"
      ? "bg-white/15 text-white ring-1 ring-white/30 shadow-card-soft hover:bg-gold-400 hover:text-brand-950 hover:ring-gold-400"
      : "bg-white/10 text-white hover:text-white";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socials.map(({ label, href, icon: Icon, colorClass }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${base} ${tone} ${colorClass}`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
