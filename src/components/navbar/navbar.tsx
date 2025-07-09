"use client";

import { sectionList } from "@/lib/constants/lists";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountMenu from "./accountMenu";
import ItemMenu from "./itemMenu";
import LanguageSwitcher from "./languageSwitcher";
import Searchbar from "./searchbar";

export default function Navbar() {
  const t = useTranslations();
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownKeysObj = Object.fromEntries(
    Object.values(sectionList).map((value) => [value.name, false])
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(dropdownKeysObj);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function goToHome() {
    router.push("/home");
  }

  function handleDropdownMenu(key: any) {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <nav className="w-full z-20">
      <div
        className={`mx-auto h-24 px-20 py-5 grid grid-cols-2 md:flex-row flex-col items-center justify-between text-red-800 bg-slate-400 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex items-center space-x-3 gap-8">
          <h1
            className="text-3xl font-bold cursor-pointer mb-2"
            onClick={goToHome}
          >
            {t("app-title")}
          </h1>
          <div className="h-full flex items-center justify-center gap-4">
            {sectionList.map((section, index) => (
              <ItemMenu
                key={index}
                section={section}
                isOpen={isDropdownOpen[section.name]}
                setIsOpen={handleDropdownMenu}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-5">
          <Searchbar />
          <AccountMenu />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
