import { HeroSection } from "../components/hero/HeroSection";

import { ServicesSection } from "../components/services/ServicesSection";

import { GallerySection } from "../components/gallery/GallerySection";

import { ProcessSection } from "../components/process/ProcessSection";

interface HomeProps {
  onBookClick: () => void;
}

export function Home({
  onBookClick,
}: HomeProps) {
  return (
    <>
      <HeroSection
        onBookClick={onBookClick}
      />

      <ServicesSection />

      <GallerySection />

      <ProcessSection />
    </>
  );
}