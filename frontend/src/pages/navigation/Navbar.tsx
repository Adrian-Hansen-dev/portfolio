import { NavMenu } from "@/pages/navigation/NavMenu.tsx";
import { NavSheet } from "@/pages/navigation/NavSheet.tsx";
import Logo from "@/components/custom/Logo.tsx";

export default function Navbar() {
  return (
    <nav className="max-w-screen-5xl fixed inset-x-5 top-2 z-10 h-16 rounded-2xl border border-gray-200 bg-white/30 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden text-sm md:block"></NavMenu>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <NavSheet />
        </div>
      </div>
    </nav>
  );
}
