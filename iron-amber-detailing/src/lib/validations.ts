import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),

  email: z.string().email("Enter a valid email"),

  phone: z.string().min(10, "Phone number is required"),

  vehicleType: z.string().min(1, "Select vehicle type"),

  service: z.string().min(1, "Select a service"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
