"use client"

import { CiSearch } from "react-icons/ci";

export default function Searchbar() {
  return (
    <div className="sticky top-0 z-10 w-full bg-slate-200 text-red-600">
      <div className="flex items-center gap-5 min-h-12 px-4">
        <CiSearch className="h-6 w-6" />
        <span>Cerca nella pagina ...</span>
      </div>
    </div>
  );
}
