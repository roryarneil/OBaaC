"use client";

type FAQAccordionProps = {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function FAQAccordion({
  question,
  children,
  defaultOpen = false,
}: FAQAccordionProps) {
  return (
    <details
      className="group rounded-xl border border-black/5 bg-white"
      open={defaultOpen}
    >
      <summary className="cursor-pointer list-none px-6 py-5 font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>
          <span
            aria-hidden="true"
            className="shrink-0 text-xl text-foreground/40 transition-transform group-open:rotate-45"
          >
            +
          </span>
        </div>
      </summary>
      <div className="border-t border-black/5 px-6 py-5 text-base leading-relaxed text-foreground/80">
        {children}
      </div>
    </details>
  );
}
