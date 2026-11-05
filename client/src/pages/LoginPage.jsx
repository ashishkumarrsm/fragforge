import { useState } from "react";
import Logo from "../components/ui/Logo";
import ThemeToggle from "../components/ui/ThemeToggle";
import AuthBrandPanel from "../components/auth/AuthBrandPanel";
import AuthForm from "../components/auth/AuthForm";

export default function LoginPage() {
  const [mode, setMode] = useState("login");
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthBrandPanel />
      <div className="relative flex items-center justify-center bg-linear-to-br from-bg to-soft px-6 py-12">
        <div className="absolute right-5 top-5">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-md">
          <Logo className="mb-10 lg:hidden" />
          <AuthForm key={mode} mode={mode} onToggleMode={() => setMode(mode === "login" ? "register" : "login")} />
        </div>
      </div>
    </div>
  );
}
