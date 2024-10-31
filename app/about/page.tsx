import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { OurTeam } from "./OurTeam";

const About = () => {
  const t = useTranslations("Setup");

  return (
    <div className="w-full py-24 lg:py-40">
      <div className="container mx-auto px-8">
        <div className="flex gap-4 py-10 flex-col items-start">
          <div>
            <Badge className="uppercase">{t("about_badge")}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-5xl md:text-7xl max-w-2xl tracking-tighter  font-regular">
              {t("about_title")}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              {t("about_subtitle")}
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex flex-col gap-1">
                  <p>{t("about_goals_title1")}</p>
                  <p className="text-muted-foreground text-sm">
                    {t("about_goals_description1")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex flex-col gap-1">
                  <p>{t("about_goals_title2")}</p>
                  <p className="text-muted-foreground text-sm">
                    {t("about_goals_description2")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex flex-col gap-1">
                  <p>{t("about_goals_title3")}</p>
                  <p className="text-muted-foreground text-sm">
                    {t("about_goals_description3")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex flex-col gap-1">
                  <p>{t("about_goals_title4")}</p>
                  <p className="text-muted-foreground text-sm">
                    {t("about_goals_description4")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex flex-col gap-1">
                  <p>{t("about_goals_title5")}</p>
                  <p className="text-muted-foreground text-sm">
                    {t("about_goals_description5")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex flex-col gap-1">
                  <p>{t("about_goals_title6")}</p>
                  <p className="text-muted-foreground text-sm">
                    {t("about_goals_description6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg mt-4 max-w-xl self-center lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            {t("about_conclusion")}
          </p>
          <OurTeam />
        </div>
      </div>
    </div>
  );
};
export default About;
