import type { Metadata } from "next";
import IntroSection from "@/components/sections/IntroSection";
import FAQContent from "@/components/sections/FAQContent";

export const metadata: Metadata = {
  title: "FAQ — OBaaC",
  description:
    "Comprehensive FAQ about Open Banking as a Community (OBaaC)—our philosophy, security, Climate Savers pilot, and how to get involved.",
};

export default function FAQPage() {
  return (
    <>
      <IntroSection variant="faq" />
      <FAQContent />
    </>
  );
}
