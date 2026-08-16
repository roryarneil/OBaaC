import Image from "next/image";

export default function StrategySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src="/images/obaac-out-in-model.png"
            alt="OBaaC Out-In model diagram showing consumer-led transactional consensus and policy-driven systemic change converging through OBaaC"
            width={800}
            height={600}
            className="w-full rounded-2xl"
            priority
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-foreground/60">
            The Strategy
          </p>
          <h1 className="font-display mb-6 text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            Why Politics Failed—and How We Flip the Model
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
              <strong>We are turning the arrows around.</strong>
            </p>
            <p>
              OBaaC introduces the <strong>&ldquo;Out-In&rdquo; model</strong> of
              collective accountability. By securely linking our bank accounts,
              we gather our everyday purchasing decisions—the choices we make on
              the ground—and focus them inward as a unified, unignorable force.
              This builds the scientific consensus and voter momentum needed to
              force politicians to make bolder, faster climate policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
