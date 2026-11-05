import { Download, Sparkles, SlidersHorizontal } from "lucide-react";

const FEATURES = [
  { Icon: Sparkles, color: "text-violet-500", title: "Ready-made gaming templates", text: "Start fast with designs built for your game." },
  { Icon: SlidersHorizontal, color: "text-cyan-500", title: "Make it yours", text: "Customize text, colors, images and layouts." },
  { Icon: Download, color: "text-rose-500", title: "Export and share", text: "Download a crisp PNG ready to publish." },
];

export default function FeatureGrid() {
  return (
    <>
      <h2 className="mt-10 text-xl font-bold">Everything you need to make your mark</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {FEATURES.map(({ Icon, color, title, text }) => (
          <div key={title} className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
            <Icon className={color} size={24} />
            <div>
              <div className="text-sm font-bold">{title}</div>
              <div className="mt-1 text-xs text-muted">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
