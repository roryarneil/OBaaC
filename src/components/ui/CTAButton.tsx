import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-green focus-visible:ring-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-spark-green text-foreground hover:bg-spark-green/90"
      : "border border-foreground/20 bg-transparent text-foreground hover:border-foreground/40";

  const className = `${baseClasses} ${variantClasses}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
