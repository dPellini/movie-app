import { Section } from "../types/section.type";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaList } from "react-icons/fa6";

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
  {
    name: "movie",
    subsections: [
      {
        name: "popular",
        path: "/movies/popular",
      },
      {
        name: "now-playing",
        path: "/movies/now-playing",
      },
      {
        name: "upcoming",
        path: "/movies/upcoming",
      },
      {
        name: "top-rated",
        path: "/movies/top-rated",
      },
    ],
  },
  {
    name: "tvs",
    subsections: [
      {
        name: "popular",
        path: "/tvs/popular",
      },
      {
        name: "airing-today",
        path: "/tvs/airing-today",
      },
      {
        name: "on-tv",
        path: "/tvs/on-tv",
      },
      {
        name: "top-rated",
        path: "/tvs/top-rated",
      },
    ],
  },
  {
    name: "people",
    subsections: [
      {
        name: "popular-people",
        path: "/people/popular-people",
      },
    ],
  },
  {
    name: "more",
    subsections: [
      {
        name: "discussion",
        path: "/more/discussion",
      },
      {
        name: "leaderboard",
        path: "/more/leaderboard",
      },
      {
        name: "support",
        path: "/more/support",
      },
    ],
  },
];

export const accountMenuList = [
  { name: "favourites", path: "/profile/favourites", icon: <FaStar /> },
  { name: "watchlist", path: "/profile/watchlist", icon: <FaList /> },
  { name: "settings", path: "/profile/settings", icon: <IoMdSettings /> },
];
