"use client";

import { sectionList } from "@/lib/constants/lists";
import { Section } from "@/lib/types/section.type";
import { useTranslations } from "next-intl";
import DropdownMenu from "../commons/dopdownMenu";
import DropdownItem from "../commons/dropdownItem";

interface ItemMenuProps {
  section: Section;
  isOpen: boolean;
  setIsOpen: (key: any) => void;
}

export default function ItemMenu({
  section,
  isOpen,
  setIsOpen,
}: ItemMenuProps) {
  const t = useTranslations("navbar-items");

  return (
    <div
      onMouseEnter={() => setIsOpen(section.name)}
      onMouseLeave={() => setIsOpen(section.name)}
      className={`relative inline-block cursor-pointer h-full mt-8`}
    >
      <span
        className={`text-lg font-semibold hover:text-red-800 cursor-pointer ${
          isOpen ? "text-red-800" : "text-white"
        }`}
      >
        {t(`${section.name}.title`)}
      </span>

      <div
        className={`h-0.5 rounded-3xl transition-all duration-400 ease-linear ${
          isOpen ? "bg-red-800 w-full" : "w-0"
        }`}
      />

      {isOpen && (
        <DropdownMenu>
          {section.subsections.map((subsection, index) => (
            <DropdownItem
              key={index}
              index={index}
              list={section.subsections}
              name={t(`${section.name}.${subsection.name}`)}
            />
          ))}
        </DropdownMenu>
      )}
    </div>
  );
}
