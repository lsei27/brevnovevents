import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(1, "Toto pole je povinné."),
  company: z.string().min(1, "Toto pole je povinné."),
  email: z.string().email("Zadejte platnou e-mailovou adresu."),
  eventType: z.string().min(1, "Toto pole je povinné."),
  guestCount: z.string().min(1, "Toto pole je povinné."),
  preferredDate: z.string().min(1, "Toto pole je povinné."),
  phone: z.string().min(1, "Toto pole je povinné."),
  catering: z.string().optional(),
  isAgency: z.string().optional(),
  description: z.string().optional(),
  source: z.string().optional(),
  website: z.string().optional(), // honeypot — checked in server action
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const eventTypeOptions = [
  "Konference",
  "Firemní večírek",
  "Product launch",
  "Gala večer",
  "Workshop",
  "Tisková konference",
  "Kongres",
  "Teambuilding",
  "Jiné",
];

export const guestCountOptions = [
  "Do 50",
  "50–100",
  "100–200",
  "200–400",
  "400–800",
  "Nad 800",
];

export const cateringOptions = [
  "Ano, prosím o nabídku",
  "Zatím jen pronájem prostor",
  "Chci se poradit",
];

export const sourceOptions = [
  "Doporučení",
  "Google",
  "LinkedIn",
  "Prague Convention Bureau",
  "Byli jsme na akci v klášteře",
  "Jiné",
];
