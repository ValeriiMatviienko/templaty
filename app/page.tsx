import { FeatureSection } from "./setup/FeatureSection";
import { HeroSection } from "./setup/HeroSection";
import { WelcomeSection } from "./setup/WelcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <HeroSection />
      <FeatureSection />
    </>
  );
}
