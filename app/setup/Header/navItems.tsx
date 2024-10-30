import { useTranslations } from "next-intl";

type NavigationItem = {
  title: string;
  href: string;
};

export const useNavigationItems = (): NavigationItem[] => {
  const t = useTranslations("Setup");
  return [
    { title: t("nav_certificates"), href: "/certificates" },
    { title: t("nav_projects"), href: "/projects" },
    { title: t("nav_know"), href: "/#know-how" },
    { title: t("nav_clients"), href: "/clients" },
    { title: t("nav_about"), href: "/about" },
    { title: t("nav_contact"), href: "/contact" },
  ];
};
