import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const getGreeting = () => {
  const hour = new Date().getHours();
  return hour < 12
    ? "Good morning"
    : hour < 17
    ? "Good afternoon"
    : "Good evening";
};
export const GreetingSection = () => (
  <div className="w-full">
    <div className="container mx-auto px-8">
      <div className="flex gap-8 pt-40 pb-10 items-center justify-center flex-col">
        <div>
          <Badge variant="outline">{getGreeting()}</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            This is the start of something new
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <a href="tel:66666">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
          </a>
          <Button size="lg" className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
