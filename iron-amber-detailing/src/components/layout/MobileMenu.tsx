import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black
        flex
        flex-col
      "
    >
      <div
        className="
          flex
          justify-between
          items-center
          p-6
        "
      >
        <div
          className="
            font-heading
            text-4xl
          "
        >
          IRON <span className="text-amberAccent">&</span> AMBER
        </div>

        <button onClick={onClose}>
          <X size={32} />
        </button>
      </div>

      <nav
        className="
          flex
          flex-col
          items-center
          justify-center
          flex-1
          gap-10

          text-3xl
          uppercase

          font-heading
        "
      >
        <a href="#services" onClick={onClose}>
          Services
        </a>

        <a href="#gallery" onClick={onClose}>
          Gallery
        </a>

        <a href="#process" onClick={onClose}>
          Process
        </a>
      </nav>
    </div>
  );
}
