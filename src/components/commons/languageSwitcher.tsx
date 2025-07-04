"use client";

import { translationList } from "@/lib/constants/lists";
import { getRoundedBorder } from "@/lib/utils";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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
    <div className="relative inline-block">
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
        <div className="absolute mt-2 right-1 w-40 rounded-md shadow-lg bg-slate-400 ring-1 ring-red-600 ring-opacity-5 z-10">
          <ul>
            {translationList.map((lang, index) => (
              <li
                key={lang.id}
                onClick={() => switchTo(lang.locale)}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer ${getRoundedBorder(
                  index,
                  translationList
                )}`}
              >
                <img
                  src={`/assets/${lang.locale}.png`}
                  alt={lang.text}
                  className="w-5 h-5 rounded-lg shadow-sm shadow-slate-200"
                />
                <span>{lang.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
