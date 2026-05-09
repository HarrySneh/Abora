interface VehicleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const vehicles = ["Sedan", "SUV", "Truck", "Luxury", "Supercar"];

export function VehicleSelector({ value, onChange }: VehicleSelectorProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-4
      "
    >
      {vehicles.map((vehicle) => {
        const active = value === vehicle;

        return (
          <button
            key={vehicle}
            type="button"
            onClick={() => onChange(vehicle)}
            className={`
              border
              rounded-2xl
              py-5
              px-4

              uppercase
              tracking-[0.15em]

              transition-all
              duration-300

              ${
                active
                  ? "bg-amberAccent text-black border-amberAccent"
                  : "border-white/10 hover:border-white/30"
              }
            `}
          >
            {vehicle}
          </button>
        );
      })}
    </div>
  );
}
