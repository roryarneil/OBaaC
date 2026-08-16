import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center text-sm text-foreground/70 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © 2026 OBaaC.org. {siteConfig.fullName}. All Rights Reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link
                href={siteConfig.redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-green"
              >
                r/OBaaC
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.docsUrl}
                className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-green"
              >
                Open Banking Standard V1
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
