import { Plus } from "lucide-react";
import Button from "../ui/Button";

export default function HeroBanner({ onCreate }) {
  return (
    <section className="relative mt-8 overflow-hidden rounded-[20px] border border-violet-300/60 bg-violet-50 p-6 sm:p-8 dark:border-[#3a2a5f] dark:bg-[#171326]">
      <div className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 bg-linear-to-br from-primary-light/20 to-violet-600/10 [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative max-w-lg">
        <p className="text-[11px] tracking-[0.2em] text-brand">YOUR CREATIVE ARENA</p>
        <h2 className="mt-3 text-3xl font-extrabold">Make your next play</h2>
        <p className="mt-3 text-sm text-muted">
          Create tournament posters, thumbnails and esports graphics that look as powerful as your game.
        </p>
        <Button onClick={onCreate} size="sm" className="mt-6 px-6">
          <Plus size={14} /> Create a design
        </Button>
      </div>
      <div className="pointer-events-none absolute right-12 top-1/2 hidden -translate-y-1/2 text-center md:block">
        <div className="text-7xl font-black text-brand">FF</div>
        <div className="text-[10px] tracking-[0.3em] text-muted">DESIGN WITHOUT LIMITS</div>
      </div>
    </section>
  );
}
