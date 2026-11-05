const GRADS = {
  purple: "from-[#201044] via-[#7c3aed] to-[#0e7490]",
  rose: "from-[#111827] via-[#be123c] to-[#431407]",
  cyan: "from-[#082f49] via-[#0e7490] to-[#172554]",
  green: "from-[#365314] via-[#15803d] to-[#052e16]",
  amber: "from-[#39200f] via-[#b45309] to-[#1c1004]",
  navy: "from-[#13243c] via-[#1e3a8a] to-[#0b1220]",
};

export const CATEGORIES = ["All designs", "Tournament", "Thumbnail", "Player", "Team", "Match", "Banner"];

export const TEMPLATES = [
  { id: 1, name: "Neon Championship", category: "Tournament", size: "1080 × 1350", eyebrow: "THE BATTLE BEGINS", title: "CHAMPIONS", sub: "CUP 2026", grad: GRADS.purple },
  { id: 2, name: "MVP Player Card", category: "Player", size: "1080 × 1350", eyebrow: "PLAYER SPOTLIGHT", title: "NOVA", sub: "MVP • 24 KILLS", grad: GRADS.rose },
  { id: 3, name: "Squad Up Matchday", category: "Match", size: "1920 × 1080", eyebrow: "TONIGHT • 8 PM", title: "SQUAD UP", sub: "LIVE MATCH", grad: GRADS.cyan },
  { id: 4, name: "Victory Announcement", category: "Team", size: "1080 × 1350", eyebrow: "VICTORY IS OURS", title: "GG EZ", sub: "TEAM VICTORY", grad: GRADS.green },
  { id: 5, name: "Game On Stream Cover", category: "Banner", size: "2560 × 1440", eyebrow: "NEXT LEVEL", title: "GAME ON", sub: "STREAM COVER", grad: GRADS.purple },
  { id: 6, name: "Open Registration", category: "Tournament", size: "1080 × 1350", eyebrow: "REGISTRATION OPEN", title: "JOIN NOW", sub: "LIMITED SLOTS", grad: GRADS.amber },
  { id: 7, name: "Rivalry Match Card", category: "Match", size: "1080 × 1080", eyebrow: "UPCOMING MATCH", title: "TEAM VS", sub: "RIVALRY RELOADED", grad: GRADS.navy },
  { id: 8, name: "Stream Starting Soon", category: "Thumbnail", size: "1920 × 1080", eyebrow: "CREATOR MODE", title: "STREAM LIVE", sub: "STARTING SOON", grad: GRADS.cyan },
];

export const getTemplate = (id) => TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
