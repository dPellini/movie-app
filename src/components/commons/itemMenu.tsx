"use client";

import { Section } from "@/lib/types/section.type";
import { getRoundedBorder } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ItemMenu({ section }: { section: Section }) {
  const t = useTranslations("nav-bar-items");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block z-50">
      <span
        onClick={() => setOpen((prev) => !prev)}
        className="text-white hover:text-red-800 cursor-pointer"
      >
        {t(section.name)}
      </span>

      {open && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-slate-400 ring-1 ring-red-600 ring-opacity-5 z-50">
          <ul className="min-h-8">
            {section.subsections.map((subsection, index) => (
              <li
                key={index}
                onClick={() => console.log("subsection path:", subsection.path)}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer ${getRoundedBorder(
                  index,
                  section.subsections
                )}`}
              >
                <span>{subsection.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
