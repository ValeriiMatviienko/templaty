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

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    description: "",
  },
  {
    title: "Product",
    description: "Managing a small business today is already tough.",
    items: [
      {
        title: "Reports",
        href: "/reports",
      },
      {
        title: "Statistics",
        href: "/statistics",
      },
      {
        title: "Dashboards",
        href: "/dashboards",
      },
      {
        title: "Recordings",
        href: "/recordings",
      },
    ],
  },
  {
    title: "Company",
    description: "Managing a small business today is already tough.",
    items: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "Fundraising",
        href: "/fundraising",
      },
      {
        title: "Investors",
        href: "/investors",
      },
      {
        title: "Contact us",
        href: "/contact",
      },
    ],
  },
];
