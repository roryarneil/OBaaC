import { obaacIntro } from "@/lib/constants";

type IntroSectionProps = {
  variant: keyof typeof obaacIntro;
};

export default function IntroSection({ variant }: IntroSectionProps) {
  const { title, description } = obaacIntro[variant];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display mb-6 text-3xl leading-tight text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
