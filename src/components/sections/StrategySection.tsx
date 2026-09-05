import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function StrategySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <YouTubeEmbed videoId="piJFpP_d6r4" />
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-foreground/60">
            The Philosophy
          </p>
          <h1 className="font-display mb-6 text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            How We Flip the Model
          </h1>
          <div className="space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>
              For decades, top-down politics has failed to deliver meaningful
              climate action. The current <strong>&ldquo;In-Out&rdquo; model</strong>{" "}
              of governance places lobbying and corporate influence at the
              center, leaving citizens on the outside waiting for change that
              never arrives.
            </p>
            <p>
              <strong>We are taking that power back</strong>
            </p>
            <p>
              OBaaC introduces an <strong>&ldquo;Out-In&rdquo; model</strong> of
              collective accountability. By securely linking our bank accounts,
              we gather and aggregate our everyday purchasing decisions—the choices we make on
              the ground—and focus them inward as a unified, unignorable force.
              Voting with our money through existing bank rails builds scientific and political
              consensus to force politicians to make bolder, faster climate policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
