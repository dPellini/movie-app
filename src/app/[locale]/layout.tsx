import Footer from "@/components/commons/footer";
import Navbar from "@/components/commons/navbar";
import Searchbar from "@/components/commons/searchbar";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const headerList = await headers();
  const pathname = headerList.get("x-current-path");

  const showSearchBar = pathname?.includes("/profile") ? false : true;

  return (
    <NextIntlClientProvider>
      <Navbar />
      {/* {showSearchBar && <Searchbar />} */}
      <main className="grow h-full w-full items-center sm:items-start bg-slate-600 overflow-hidden border border-red-500">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
