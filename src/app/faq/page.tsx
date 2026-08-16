import type { Metadata } from "next";
import FAQIntro from "@/components/sections/FAQIntro";
import FAQContent from "@/components/sections/FAQContent";

export const metadata: Metadata = {
  title: "FAQ — OBaaC",
  description:
    "Comprehensive FAQ about Open Banking as a Community (OBaaC)—our philosophy, security, Climate Savers pilot, and how to get involved.",
};

export default function FAQPage() {
  return (
    <>
      <FAQIntro />
      <FAQContent />
    </>
  );
}
