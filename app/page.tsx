import { FeatureSection } from "./setup/FeatureSection";
import { GreetingSection } from "./setup/GreetingSection";
import { HeroSection } from "./setup/HeroSection";
import { WelcomeSection } from "./setup/WelcomeSection";

export default function Home() {
  return (
    <>
      <GreetingSection />
      <WelcomeSection />
      <HeroSection />
      <FeatureSection />
    </>
  );
}
