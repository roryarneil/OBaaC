import IntroSection from "@/components/sections/IntroSection";
import StrategySection from "@/components/sections/StrategySection";
import CommunitySection from "@/components/sections/CommunitySection";
import TrustSection from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <>
      <IntroSection variant="home" />
      <StrategySection />
      <CommunitySection />
      <TrustSection />
    </>
  );
}
