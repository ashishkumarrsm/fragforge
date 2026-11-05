import { Trophy, Play, Star, Swords } from "lucide-react";

// Quick-start formats shown on the dashboard. Each has a light + dark colour set.
export const FORMATS = [
  {
    label: "Tournament poster", hint: "Announce your next event", category: "Tournament", Icon: Trophy,
    card: "bg-violet-50 border-violet-200 dark:bg-[#1a172b] dark:border-[#38304e]",
    box: "bg-violet-200 text-violet-700 dark:bg-[#422078] dark:text-violet-100",
    link: "text-violet-600 dark:text-primary-light",
  },
  {
    label: "YouTube thumbnail", hint: "Make every view count", category: "Thumbnail", Icon: Play,
    card: "bg-cyan-50 border-cyan-200 dark:bg-[#151d2b] dark:border-[#283d50]",
    box: "bg-cyan-200 text-cyan-800 dark:bg-[#164e63] dark:text-cyan-100",
    link: "text-cyan-700 dark:text-cyan-300",
  },
  {
    label: "Player spotlight", hint: "Showcase your MVP", category: "Player", Icon: Star,
    card: "bg-rose-50 border-rose-200 dark:bg-[#25151d] dark:border-[#4a2939]",
    box: "bg-rose-200 text-rose-800 dark:bg-[#7f1d3a] dark:text-rose-100",
    link: "text-rose-600 dark:text-rose-300",
  },
  {
    label: "Match announcement", hint: "Set the stage for battle", category: "Match", Icon: Swords,
    card: "bg-teal-50 border-teal-200 dark:bg-[#17252a] dark:border-[#29474a]",
    box: "bg-teal-200 text-teal-800 dark:bg-[#115e59] dark:text-teal-100",
    link: "text-teal-700 dark:text-teal-300",
  },
];
