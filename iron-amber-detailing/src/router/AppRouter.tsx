import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Terms } from "../pages/Terms";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

interface AppRouterProps {
  onBookClick: () => void;
}

export function AppRouter({ onBookClick }: AppRouterProps) {
  return (
    <BrowserRouter>
      <Navbar onBookClick={onBookClick} />

      <Routes>
        <Route path="/" element={<Home onBookClick={onBookClick} />} />

        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
