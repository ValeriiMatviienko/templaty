import { Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { useTranslations } from "next-intl";

const getGreeting = () => {
  const hour = new Date().getHours();
  return hour < 12
    ? "Good morning"
    : hour < 17
    ? "Good afternoon"
    : "Good evening";
};
export const GreetingSection = () => {
  // const t = useTranslations("Setup");
  return (
    <div className="w-full">
      <div className="container mx-auto px-8">
        <div className="flex gap-8 pt-40 pb-10 items-center justify-center flex-col">
          <div>
            <Badge variant="outline">{getGreeting()}</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              Hello
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="tel:66666">
              <Button size="lg" className="gap-4 uppercase" variant="outline">
                call us <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" className="gap-4 uppercase buttonColor">
              Send mail <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
