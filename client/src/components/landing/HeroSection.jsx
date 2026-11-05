import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import HeroPoster from "./HeroPoster";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
      <div>
        <p className="text-xs tracking-[0.3em] text-brand">THE GAMING DESIGN STUDIO</p>
        <h1 className="mt-5 text-[44px] font-black leading-[1.05] tracking-tight sm:text-6xl">
          YOUR GAME.
          <br />
          YOUR <span className="text-brand">IDENTITY.</span>
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          Create stunning gaming posters, esports graphics and thumbnails — no design experience required.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" onClick={() => navigate("/login")}>
            Start creating →
          </Button>
          <Button variant="ghost" size="lg" onClick={() => navigate("/templates")}>
            Explore templates
          </Button>
        </div>
        <p className="mt-8 text-[11px] tracking-wide text-muted">BUILT FOR GAMERS • STREAMERS • ESPORTS TEAMS</p>
      </div>
      <HeroPoster />
    </section>
  );
}
