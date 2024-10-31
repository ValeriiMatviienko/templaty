import { useTranslations } from "next-intl";
export const OurTeam = () => {
  const t = useTranslations("Setup");
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 pt-16 pb-8 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter  font-regular">
              {t("our_team_title")}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
              {t("our_teamp1")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
              {t("our_teamp2")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
              {t("our_teamp3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
