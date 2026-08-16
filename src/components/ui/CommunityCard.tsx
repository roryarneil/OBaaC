type CommunityCardProps = {
  title: string;
  description: string;
  icon: "people" | "trend" | "heart";
};

function CardIcon({ icon }: { icon: CommunityCardProps["icon"] }) {
  switch (icon) {
    case "people":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "trend":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "heart":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
  }
}

export default function CommunityCard({
  title,
  description,
  icon,
}: CommunityCardProps) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
      <div className="mb-4 text-foreground/70">
        <CardIcon icon={icon} />
      </div>
      <h3 className="font-display mb-3 text-lg text-foreground">{title}</h3>
      <p className="text-base leading-relaxed text-foreground/70">
        {description}
      </p>
    </article>
  );
}
