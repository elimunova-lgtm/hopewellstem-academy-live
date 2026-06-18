import { socials } from "@/lib/site";

type Props = {
  variant?: "bar" | "footer";
  className?: string;
};

export default function SocialLinks({ variant = "bar", className = "" }: Props) {
  const base =
    "flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5";
  const tone =
    variant === "bar"
      ? "bg-white/15"
      : "bg-white/10";

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
