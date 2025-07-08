"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

export default function Searchbar() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchbar = () => {
    setIsOpen((prev) => !prev);
  };

  const containerAnimation = isOpen
    ? "w-[80%] h-auto flex justify-between rounded-2xl border-2"
    : "w-0 h-0";

  return (
    <div className="flex items-center justify-end text-slate-200 gap-3">
      <div
        className={`bg-slate-200 border-slate-200 text-red-800 transition-all duration-600 ease-in-out ${containerAnimation}`}
      >
        {isOpen && (
          <>
            <input
              type="text"
              placeholder="Type anything..."
              className="p-2 rounded-2xl border-slate-200 focus:outline-hidden"
            />
            <button className="bg-red-800 text-slate-200 rounded-2xl px-5 m-1 ml-12">
              search
            </button>
          </>
        )}
      </div>

      {isOpen ? (
        <IoClose
          className="h-6 w-6 cursor-pointer hover:scale-130"
          onClick={handleSearchbar}
        />
      ) : (
        <IoSearch
          className="h-6 w-6 cursor-pointer hover:scale-130"
          onClick={handleSearchbar}
        />
      )}
    </div>
  );
}
