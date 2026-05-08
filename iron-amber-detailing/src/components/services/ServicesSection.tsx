import { SectionTitle } from "../shared/SectionTitle";

import { services } from "../../data/services";

import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="container-main">
        <SectionTitle
          eyebrow="Premium Services"
          title="Luxury Care"
          accent="For Exceptional Vehicles"
        />

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
