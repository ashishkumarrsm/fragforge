import LandingHeader from "../components/landing/LandingHeader";
import HeroSection from "../components/landing/HeroSection";
import FeatureGrid from "../components/landing/FeatureGrid";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-bg to-soft">
      <div className="pointer-events-none absolute -right-40 top-20 h-150 w-150 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 lg:px-10">
        <LandingHeader />
        <HeroSection />
        <FeatureGrid />
      </div>
    </div>
  );
}
