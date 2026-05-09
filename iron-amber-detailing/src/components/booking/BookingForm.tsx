import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { bookingSchema, BookingFormData } from "../../lib/validations";

import { VehicleSelector } from "./VehicleSelector";
import { PaymentButton } from "./PaymentButton";

export function BookingForm() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const vehicleType = watch("vehicleType");

  const selectedService = watch("service");

  function onSubmit(data: BookingFormData) {
    console.log(data);

    setStep(3);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label className="block mb-3 uppercase text-sm tracking-[0.15em]">
              Full Name
            </label>

            <input
              {...register("fullName")}
              className="
                w-full
                bg-black
                border
                border-white/10
                rounded-xl
                px-5
                py-4
              "
            />

            {errors.fullName && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-3 uppercase text-sm tracking-[0.15em]">
              Email Address
            </label>

            <input
              {...register("email")}
              className="
                w-full
                bg-black
                border
                border-white/10
                rounded-xl
                px-5
                py-4
              "
            />
          </div>

          <div>
            <label className="block mb-3 uppercase text-sm tracking-[0.15em]">
              Phone Number
            </label>

            <input
              {...register("phone")}
              className="
                w-full
                bg-black
                border
                border-white/10
                rounded-xl
                px-5
                py-4
              "
            />
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="
              btn-primary
              w-full
            "
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8">
          <div>
            <label className="block mb-4 uppercase text-sm tracking-[0.15em]">
              Vehicle Type
            </label>

            <VehicleSelector
              value={vehicleType}
              onChange={(value) => setValue("vehicleType", value)}
            />
          </div>

          <div>
            <label className="block mb-3 uppercase text-sm tracking-[0.15em]">
              Service
            </label>

            <select
              {...register("service")}
              className="
                w-full
                bg-black
                border
                border-white/10
                rounded-xl
                px-5
                py-4
              "
            >
              <option value="">Select Service</option>

              <option>Ceramic Coating</option>

              <option>Paint Correction</option>

              <option>Interior Detailing</option>
            </select>
          </div>

          {selectedService && (
            <div
              className="
                border
                border-white/10
                rounded-2xl
                p-6
                bg-white/5
              "
            >
              <p className="text-white/60 mb-2">Selected Service</p>

              <h3
                className="
                  text-2xl
                  font-semibold
                "
              >
                {selectedService}
              </h3>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="
                btn-secondary
                w-full
              "
            >
              Back
            </button>

            <PaymentButton />
          </div>
        </div>
      )}

      {step === 3 && (
        <div
          className="
            text-center
            py-10
          "
        >
          <div
            className="
              text-6xl
              mb-6
            "
          >
            ✓
          </div>

          <h3
            className="
              font-heading
              text-5xl
              uppercase
              mb-4
            "
          >
            Booking Submitted
          </h3>

          <p className="text-white/70 max-w-md mx-auto">
            Our concierge team will contact you shortly to confirm your
            appointment.
          </p>
        </div>
      )}
    </form>
  );
}
