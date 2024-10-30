"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { XIcon, MenuIcon } from "lucide-react";
import { ModeToggle } from "../ThemeButton";
import { useNavigationItems } from "./navItems";

export const Header = () => {
  const navigationItems = useNavigationItems();
  const [isOpen, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative p-4 mx-auto min-h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-semibold text-foreground dark:text-white">
            LOGO
          </span>
        </Link>

        <div className="hidden lg:flex flex-grow justify-center items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="text-foreground dark:text-white uppercase"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="border-r hidden md:inline"></div>
          <Button variant="outline" className="text-foreground dark:text-white">
            Sign in
          </Button>
          <ModeToggle />
        </div>

        <div
          className="flex w-12 lg:hidden items-end justify-end"
          ref={menuRef}
        >
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="w-5 h-5 text-foreground dark:text-white" />
            ) : (
              <MenuIcon className="w-5 h-5 text-foreground dark:text-white" />
            )}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="flex flex-col px-4 gap-1">
                  <Link
                    href={item.href}
                    className="text-lg text-foreground dark:text-white uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
