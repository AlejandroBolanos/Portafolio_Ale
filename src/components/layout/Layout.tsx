import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SkipLink } from "../accessibility/SkipLink";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
