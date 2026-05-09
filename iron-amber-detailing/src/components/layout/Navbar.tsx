import { useState } from "react";

import { Menu } from "lucide-react";

import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50

          backdrop-blur-md
          bg-black/30
        "
      >
        <div
          className="
            container-main
            flex
            items-center
            justify-between
            py-6
          "
        >
          <div
            className="
              font-heading
              text-4xl
              tracking-wide
            "
          >
            IRON <span className="text-amberAccent">&</span> AMBER
          </div>

          <nav
            className="
              hidden
              md:flex
              gap-10

              uppercase
              tracking-[0.25em]
              text-sm
            "
          >
            <a href="#services">Services</a>

            <a href="#gallery">Gallery</a>

            <a href="#process">Process</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="
                hidden
                md:block
                btn-primary
              "
            >
              Book Now
            </button>

            <button className="md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
