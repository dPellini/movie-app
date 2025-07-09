import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("not-found");

  const redirectMessage = "back-home";
  const redirectPath = "/home";

  return (
    <div className="antialiased h-screen w-screen flex items-center justify-center overflow-hidden bg-slate-600 ">
      <div className="flex flex-col items-center justify-center gap-12 border-2 rounded-lg p-12 bg-white shadow-slate-500 shadow-md">
        <h2 className="text-4xl text-red-600 font-bold">{t("title")}</h2>
        <p className="text-slate-400">{t("message")}</p>
        <a href={redirectPath} className="text-blue-500 hover:underline">
          {t(redirectMessage)}
        </a>
      </div>
    </div>
  );
}
