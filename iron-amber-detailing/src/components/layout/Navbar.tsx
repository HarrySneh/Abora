interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container-main flex items-center justify-between py-6">
        <div className="font-heading text-4xl tracking-wide">
          IRON <span className="text-amberAccent">&</span> AMBER
        </div>

        <nav className="hidden md:flex gap-10 uppercase tracking-[0.3em] text-sm">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#process">Process</a>
        </nav>

        <button onClick={onBookClick} className="btn-primary">
          Book Now
        </button>
      </div>
    </header>
  );
}
