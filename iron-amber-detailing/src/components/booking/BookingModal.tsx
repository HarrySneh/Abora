import { BookingForm } from "./BookingForm";

import { Modal } from "../ui/Modal";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <p
        className="
          uppercase
          tracking-[0.35em]
          text-amberAccent
          text-sm
          mb-4
        "
      >
        Secure Your Appointment
      </p>

      <h2
        className="
          font-heading
          text-5xl
          uppercase
          leading-none
          mb-10
        "
      >
        Book Your Detail
      </h2>

      <BookingForm />
    </Modal>
  );
}
