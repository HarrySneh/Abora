import { Phone } from "lucide-react";

interface FloatingCTAProps {
  onBookClick: () => void;
}

export function FloatingCTA({ onBookClick }: FloatingCTAProps) {
  return (
    <button
      onClick={onBookClick}
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        items-center
        gap-3

        bg-amberAccent
        text-black

        px-6
        py-4

        rounded-full

        shadow-2xl

        font-semibold
        uppercase
        tracking-[0.15em]

        hover:scale-105
        transition-all
        duration-300
      "
    >
      <Phone size={18} />
      Book Now
    </button>
  );
}
