import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[1000]

        bg-black/70
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-6
      "
    >
      <div
        className="
          relative

          w-full
          max-w-2xl

          bg-[#111]

          border
          border-white/10

          rounded-3xl

          p-10
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
          "
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  );
}
