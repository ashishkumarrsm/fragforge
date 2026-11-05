import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/ui/uiSlice";
import { greeting } from "../../lib/greeting";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNav from "./MobileNav";

const META = {
  "/dashboard": { title: () => `${greeting()}, Ashish 👋`, subtitle: "Ready to forge something legendary?", searchable: false },
  "/templates": { title: () => "Explore templates", subtitle: "Find the perfect starting point for your next creation.", searchable: true },
  "/projects": { title: () => "My Projects", subtitle: "Everything you've created, in one place.", searchable: true },
};

export default function AppShell() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const meta = META[pathname] ?? META["/dashboard"];

  // clear the search box whenever the user changes page
  useEffect(() => {
    dispatch(setSearch(""));
  }, [pathname, dispatch]);

  return (
    <div className="min-h-screen lg:pl-62.5">
      <Sidebar />
      <main className="px-5 pb-28 pt-6 lg:px-10 lg:pb-10">
        <Header title={meta.title()} subtitle={meta.subtitle} searchable={meta.searchable} />
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}
