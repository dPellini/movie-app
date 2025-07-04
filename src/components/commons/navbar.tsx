"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./languageSwitcher";
import ItemMenu from "./itemMenu";
import { sectionList } from "@/lib/constants/lists";

export default function Navbar() {
  const t = useTranslations();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

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

  return (
    <nav className="w-full z-20">
      <div
        className={`mx-auto px-4 py-7 flex items-center justify-between text-red-800 bg-slate-400 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-end space-x-3 gap-8">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={goToHome}>
            {t("app-title")}
          </h1>
          <div className="flex items-center gap-4 ">
            {sectionList.map((section, index) => (
              <ItemMenu key={index} section={section} />
            ))}
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
