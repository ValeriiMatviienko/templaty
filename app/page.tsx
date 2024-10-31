import { GreetingSection } from "./setup/GreetingSection";
import { HeroSection } from "./setup/HeroSection";
import { KnowHowSection } from "./setup/KnowHowSection";
import { WelcomeSection } from "./setup/WelcomeSection";

export default function Home() {
  return (
    <>
      <GreetingSection />
      <WelcomeSection />
      <KnowHowSection />
      <HeroSection />
    </>
  );
}
