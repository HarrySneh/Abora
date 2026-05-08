import { SectionTitle } from "../shared/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Book Your Service",
    text: "Choose your detailing package and preferred appointment time.",
  },

  {
    number: "02",
    title: "We Come To You",
    text: "Our fully equipped detailing studio arrives at your location.",
  },

  {
    number: "03",
    title: "Luxury Transformation",
    text: "Your vehicle receives elite-level restoration and protection.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-[#080808]">
      <div className="container-main">
        <SectionTitle
          eyebrow="Our Process"
          title="Designed"
          accent="For Convenience"
        />

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                border
                border-white/10
                p-10
                rounded-2xl
                bg-white/5
              "
            >
              <div
                className="
                  text-amberAccent
                  font-heading
                  text-6xl
                  mb-6
                "
              >
                {step.number}
              </div>

              <h3
                className="
                  text-2xl
                  font-semibold
                  mb-4
                "
              >
                {step.title}
              </h3>

              <p className="text-white/70 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
