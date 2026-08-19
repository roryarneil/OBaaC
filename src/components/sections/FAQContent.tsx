import Image from "next/image";
import { faqSections, isSpecialFAQAnswer, siteConfig } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Co2BarChart from "@/components/ui/Co2BarChart";
import CTAButton from "@/components/ui/CTAButton";

function FootprintManifesto() {
  return (
    <div className="space-y-4">
      <figure className="my-6">
        <Image
          src="/images/footprint-illustration.png"
          alt="Illustration of a person stepping through a portal from a patterned world into a natural world with birds"
          width={800}
          height={500}
          className="w-full rounded-xl"
        />
        <figcaption className="mt-3 text-center text-sm italic text-foreground/70">
          Our carbon footprint is what links the human world with the natural
          world.
        </figcaption>
      </figure>
      <p>
        In 2004, BP and big oil companies hijacked the concept of the
        &ldquo;carbon footprint&rdquo; to shift the blame. They wanted you to
        feel personally guilty about driving to work while they extracted
        billions of barrels of oil from the ground. They wanted you to think
        your footprint was a burden.
      </p>
      <p>
        <strong>They were wrong.</strong>
      </p>
      <p>
        The carbon footprint wasn&apos;t invented in a corporate boardroom; it
        was created by ecologist William Rees to give us a physical tape measure
        for Earth&apos;s boundaries. Your footprint is not an instrument of
        guilt—it is your personal dashboard on a finite planet, and it is the
        physical link between the human world and the natural world.
      </p>
      <p>
        <strong>It&apos;s our only hope.</strong>
      </p>
      <p>
        Governments treat &ldquo;per-capita emissions&rdquo; as an abstract,
        top-down statistical average.
      </p>
      <p>
        <strong>We are taking that number back.</strong>
      </p>
      <p>
        By tracking, pricing, and settling our individual footprints, we
        transform carbon from an invisible threat into a real-world decision
        tool and a ground-up consumer movement.
      </p>
    </div>
  );
}

function ClimateSaversPilot() {
  return (
    <div className="space-y-4">
      <p>
        Our first major implementation of the OBaaC standard is Climate Savers,
        a platform that rewards users for making verified, low-carbon travel
        decisions. To prove how this works, we partnered with the European
        Sleeper Train. Here is the real-world impact of our community&apos;s
        choices:
      </p>
      <h4 className="font-medium text-foreground">The Hard Math</h4>
      <p>
        Traveling from Amsterdam to Berlin by the European Sleeper train
        produces only 12 kg of CO₂, compared to 89 kg by car or a massive 142
        kg by flight. Choosing the train saves up to 92% of CO₂ emissions.
      </p>
      <Co2BarChart />
      <h4 className="font-medium text-foreground">The Power of Wallet Share</h4>
      <p>
        We track our collective impact on a public dashboard. To date, our
        users have logged <strong>7,853 total train bookings</strong>. This
        isn&apos;t just an abstract stat; it is a verified register of 7,853
        consumer decisions opting for a lower-carbon choice, proving a growing
        collective willingness to trade convenience for the planet.
      </p>
      <h4 className="font-medium text-foreground">The Reward Loop</h4>
      <p>
        We reward sustainable actions with cashback funded by eco-conscious
        merchants. Currently, Climate Savers has{" "}
        <strong>342 pending claims (€4,280 value)</strong> undergoing
        verification, and has already paid out{" "}
        <strong>€28,450 directly back to our members&apos; bank accounts</strong>.
      </p>
    </div>
  );
}

function GetInvolved() {
  return (
    <div className="space-y-6">
      <ul className="space-y-3">
        <li>
          <strong>Join the subreddit:</strong> Subscribe to{" "}
          <a
            href={siteConfig.redditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-spark-green underline-offset-2 hover:decoration-2"
          >
            r/OBaaC
          </a>{" "}
          to take part in discussions on how we can expand this open-banking
          community standard.
        </li>
        <li>
          <strong>Visit the website:</strong> Go to{" "}
          <a
            href={siteConfig.url}
            className="text-foreground underline decoration-spark-green underline-offset-2 hover:decoration-2"
          >
            OBaaC.org
          </a>{" "}
          to read our full technical standards and developer guides.
        </li>
        <li>
          <strong>Try Climate Savers:</strong> Link your account, opt for
          sustainable choices, and start getting rewarded while building the
          collective momentum needed to force bolder climate action.
        </li>
      </ul>
      <div className="flex flex-wrap gap-4">
        <CTAButton href={siteConfig.redditUrl} external>
          Join r/OBaaC
        </CTAButton>
        <CTAButton href={siteConfig.climateSaversUrl} variant="secondary" external>
          Try Climate Savers
        </CTAButton>
      </div>
    </div>
  );
}

function FAQAnswer({ answer }: { answer: string }) {
  if (isSpecialFAQAnswer(answer)) {
    switch (answer) {
      case "footprint-manifesto":
        return <FootprintManifesto />;
      case "climate-savers-pilot":
        return <ClimateSaversPilot />;
      case "get-involved":
        return <GetInvolved />;
    }
  }

  return <p>{answer}</p>;
}

export default function FAQContent() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl space-y-12 px-6">
        {faqSections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display mb-6 text-2xl text-foreground md:text-3xl">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <FAQAccordion key={item.question} question={item.question}>
                  <FAQAnswer answer={item.answer} />
                </FAQAccordion>
              ))}
            </div>
          </div>
        ))}
        <p className="pt-8 text-center text-xl italic text-foreground/80 md:text-2xl">
          &ldquo;Small choices, repeated often, shape the bigger picture.&rdquo;
        </p>
      </div>
    </section>
  );
}
