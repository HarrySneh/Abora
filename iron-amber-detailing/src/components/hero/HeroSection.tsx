interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container-main">
          <p className="uppercase tracking-[0.4em] text-amberAccent mb-5 text-sm">
            Mobile Automotive Detailing
          </p>

          <h1 className="font-heading uppercase leading-none">
            <span className="block text-6xl md:text-8xl lg:text-[10rem]">
              The Showroom Finish,
            </span>

            <span className="block text-amberAccent text-5xl md:text-7xl lg:text-[8rem]">
              Delivered To Your Doorstep.
            </span>
          </h1>

          <p className="max-w-2xl mt-8 text-lg text-gray-300">
            Atlanta’s premier mobile detailing studio. Our fully equipped unit
            comes to you — at home, at the office, wherever your vehicle lives.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button onClick={onBookClick} className="btn-primary">
              Secure Your Transformation
            </button>

            <button className="btn-secondary">Explore Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}
