export function timeAgo(iso) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (s < 60) return "just now";
  if (m < 60) return `${m} minute${m > 1 ? "s" : ""} ago`;
  if (h < 24) return `${h} hour${h > 1 ? "s" : ""} ago`;
  if (d === 1) return "yesterday";
  return `${d} days ago`;
}
