import { Section } from "../types/section.type";

export const translationList = [
  {
    id: 1,
    text: "Italiano",
    locale: "it",
    iconPath: "@/public/assets/it.png",
  },
  {
    id: 2,
    text: "English",
    locale: "en",
    iconPath: "@/public/assets/en.png",
  },
];

export const sectionList: Section[] = [
  { name: "movie", subsections: [] },
  { name: "tvs", subsections: [] },
  { name: "people", subsections: [] },
  { name: "more", subsections: [] },
];
