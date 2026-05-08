import { useState } from "react";

import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/hero/HeroSection";

import { ServicesSection } from "./components/services/ServicesSection";
import { GallerySection } from "./components/gallery/GallerySection";
import { ProcessSection } from "./components/process/ProcessSection";

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="bg-obsidian text-white">
      <Navbar onBookClick={() => setBookingOpen(true)} />

      <HeroSection onBookClick={() => setBookingOpen(true)} />

      <ServicesSection />

      <GallerySection />

      <ProcessSection />
    </main>
  );
}

export default App;
