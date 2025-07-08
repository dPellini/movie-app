"use client";

import { translationList } from "@/lib/constants/lists";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DropdownMenu from "../commons/dopdownMenu";
import DropdownItem from "../commons/dropdownItem";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (lang: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${lang}`);
    router.push(newPath);
    setOpen(false);
  };

  const currentLang = translationList.find((lang) => lang.locale === locale);

  return (
    <div className="relative inline-block mx-auto">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center space-x-2 text-white rounded-4xl p-1 shadow-sm shadow-slate-200 cursor-pointer"
      >
        <img
          src={`/assets/${currentLang?.locale}.png`}
          alt={currentLang?.text}
          className="w-7 h-7"
        />
      </button>

      {open && (
        <DropdownMenu isRight={true}>
          {translationList.map((lang, index) => (
            <DropdownItem
              key={lang.id}
              index={index}
              list={translationList}
              name={lang.text}
              img={`/assets/${lang.locale}.png`}
              onClick={() => switchTo(lang.locale)}
            />
          ))}
        </DropdownMenu>
      )}
    </div>
  );
}
