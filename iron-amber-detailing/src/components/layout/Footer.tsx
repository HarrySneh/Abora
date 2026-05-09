export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div
        className="
          container-main
          flex
          flex-col
          md:flex-row
          gap-10
          justify-between
        "
      >
        <div>
          <h2
            className="
              font-heading
              text-4xl
            "
          >
            IRON <span className="text-amberAccent">&</span> AMBER
          </h2>

          <p className="mt-4 text-white/60 max-w-md">
            Luxury mobile detailing designed for exceptional vehicles.
          </p>
        </div>

        <div className="space-y-3 text-white/60">
          <p>Atlanta, Georgia</p>
          <p>contact@ironandamber.com</p>
          <p>(404) 000-0000</p>
        </div>
      </div>
    </footer>
  );
}
