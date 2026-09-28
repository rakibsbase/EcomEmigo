import { NAV_LINKS } from "@/lib/constants";
import { Navbar } from "./navbar";

export function SiteHeader() {
  return <Navbar navLinks={NAV_LINKS} />;
}
