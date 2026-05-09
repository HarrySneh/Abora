import { useState } from "react";

import { AppRouter } from "./router/AppRouter";

import { FloatingCTA } from "./components/layout/FloatingCTA";

import { BookingModal } from "./components/booking/BookingModal";

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="bg-obsidian text-white">
      <AppRouter onBookClick={() => setBookingOpen(true)} />

      <FloatingCTA onBookClick={() => setBookingOpen(true)} />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

export default App;
