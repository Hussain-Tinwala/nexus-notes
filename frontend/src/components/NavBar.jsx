import { Link } from "react-router";
import { PlusIcon, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-base-300/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Zap className="size-6 text-black" fill="black" />
            </div>
            <h1 className="text-2xl font-black text-white font-mono tracking-tighter uppercase">
              Nexus<span className="text-primary">Notes</span>
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary btn-sm md:btn-md shadow-[0_0_15px_rgba(0,255,157,0.3)] border-none hover:scale-105 transition-all">
              <PlusIcon className="size-5" />
              <span className="hidden md:inline">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;