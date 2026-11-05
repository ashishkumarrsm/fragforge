import Logo from "../ui/Logo";

export default function AuthBrandPanel() {
  return (
    <div className="relative hidden flex-col justify-between overflow-hidden bg-panel p-14 lg:flex">
      <div className="pointer-events-none absolute left-20 top-1/3 h-100 w-100 rounded-full bg-violet-600/10 blur-3xl" />
      <Logo />
      <div className="relative">
        <p className="text-xs tracking-[0.3em] text-brand">WELCOME TO THE ARENA</p>
        <h2 className="mt-5 text-5xl font-black leading-[1.1]">
          YOUR NEXT
          <br />
          <span className="text-brand">MASTERPIECE</span>
          <br />
          STARTS HERE.
        </h2>
        <p className="mt-5 text-sm text-muted">Create. Customize. Dominate.</p>
        <div className="mt-8 flex h-52 max-w-lg flex-col items-center justify-center rounded-2xl bg-linear-to-br from-[#21114d] via-[#6d28d9] to-[#0e7490] text-center text-white">
          <span className="text-xs tracking-[0.3em] text-violet-100">FRAGFORGE ORIGINAL</span>
          <span className="mt-2 text-4xl font-black leading-tight">
            PLAY BIG.
            <br />
            <span className="text-violet-200">DESIGN BIGGER.</span>
          </span>
        </div>
      </div>
      <span />
    </div>
  );
}
