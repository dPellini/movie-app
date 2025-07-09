import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "en";

  return {
    locale,
    messages: (await import(`../../dictionaries/${locale}.json`)).default,
  };
});
