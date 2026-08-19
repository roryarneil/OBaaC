"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/5 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display max-w-[min(100%,20rem)] text-base leading-tight tracking-tight text-foreground sm:max-w-none sm:text-lg md:text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-green"
        >
          OBaaC: Open Banking-as-a Community
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-green ${
                      isActive
                        ? "border-b-2 border-spark-green pb-0.5 text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
