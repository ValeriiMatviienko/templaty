import { useTranslations } from "next-intl";

type NavigationSubItem = {
  title: string;
  href: string;
};

type NavigationItem = {
  title: string;
  description: string;
  href?: string;
  items?: NavigationSubItem[];
};

export const useNavigationItems = (): NavigationItem[] => {
  const t = useTranslations("Setup");

  return [
    {
      title: t("footer_nav__product"),
      description: t("footer_nav__product_description"),
      items: [
        { title: t("footer_nav__reports"), href: "/reports" },
        { title: t("footer_nav__statistics"), href: "/statistics" },
        { title: t("footer_nav__dashboards"), href: "/dashboards" },
        { title: t("footer_nav__recordings"), href: "/recordings" },
      ],
    },
    {
      title: t("footer_nav__company"),
      description: t("footer_nav__company_description"),
      items: [
        { title: t("footer_nav__about"), href: "/about" },
        { title: t("footer_nav__fundraising"), href: "/fundraising" },
        { title: t("footer_nav__investors"), href: "/investors" },
        { title: t("footer_nav__contact"), href: "/contact" },
      ],
    },
  ];
};
