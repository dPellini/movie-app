import Footer from "@/components/commons/footer";
import Loader from "@/components/commons/loader";
import Navbar from "@/components/navbar/navbar";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode, Suspense } from "react";

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NextIntlClientProvider>
      <Navbar />
      <main className="grow h-full w-full items-center sm:items-start bg-slate-600 overflow-hidden">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
