import clsx from "clsx";
import { MOUNTAINS } from "../poster/Poster";

export default function HeroPoster() {
  return (
    <div className="relative rounded-3xl border border-primary/40 bg-surface p-5 shadow-xl">
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-2xl bg-linear-to-br from-[#21114d] via-[#6d28d9] to-[#0e7490] text-white">
        <div className={clsx("absolute inset-x-0 bottom-0 h-3/5 bg-black/55", MOUNTAINS)} />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <span className="text-xs tracking-[0.3em] text-violet-100">FRAGFORGE ORIGINAL</span>
          <span className="mt-4 font-esports text-5xl font-black leading-tight">
            RISE
            <br />
            ABOVE
          </span>
          <span className="mt-3 text-sm tracking-[0.25em] text-violet-200">THE ARENA AWAITS</span>
          <div className="mt-8 rounded-lg border border-primary-light bg-[#0b0b18]/80 px-6 py-3">
            <div className="text-[10px] tracking-[0.2em] text-violet-300">NEXT TOURNAMENT</div>
            <div className="text-lg font-black">NOVEMBER 24 • 8 PM</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 right-4 rounded-xl border border-line bg-elevated px-4 py-3 shadow-lg">
        <div className="text-[10px] text-brand">DESIGN IN MINUTES</div>
        <div className="text-sm font-bold">Made for the arena</div>
      </div>
    </div>
  );
}
