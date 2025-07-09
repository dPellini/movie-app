"use client";

import { accountMenuList } from "@/lib/constants/lists";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import DropdownMenu from "../commons/dopdownMenu";
import DropdownItem from "../commons/dropdownItem";
import { useRouter } from "next/navigation";

export default function AccountMenu() {
  const t = useTranslations("account-menu");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block mx-auto">
      <RiAccountCircleFill
        className={`h-8 w-8 cursor-pointer hover:scale-120 ${
          isOpen && "scale-120"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <DropdownMenu isRight={true}>
          {accountMenuList.map((option, index) => (
            <DropdownItem
              key={index}
              index={index}
              list={accountMenuList}
              name={t(option.name)}
              icon={option.icon}
              onClick={() => handleClick(option.path)}
            />
          ))}
        </DropdownMenu>
      )}
    </div>
  );
}
