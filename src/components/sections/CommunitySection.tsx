import { communityCards } from "@/lib/constants";
import CommunityCard from "@/components/ui/CommunityCard";

export default function CommunitySection() {
  return (
    <section className="bg-white/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-spark-green/30 px-4 py-1.5 text-sm font-medium text-foreground">
            Community driven
          </span>
          <h2 className="font-display mb-4 text-3xl text-foreground md:text-4xl">
            You&apos;re not doing this alone
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Every transaction is part of a growing movement. More people making
            green choices makes the transition easier, more normal, and more
            supported.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {communityCards.map((card) => (
            <CommunityCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
