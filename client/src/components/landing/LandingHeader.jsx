import { Link, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function LandingHeader() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between py-6">
      <Logo />
      <nav className="hidden gap-10 text-sm text-muted md:flex">
        <Link to="/templates" className="hover:text-fg">Explore templates</Link>
        <span>Features</span>
        <span>About</span>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
          Log in
        </Button>
        <Button size="sm" className="hidden sm:inline-flex" onClick={() => navigate("/login")}>
          Get started →
        </Button>
      </div>
    </header>
  );
}
