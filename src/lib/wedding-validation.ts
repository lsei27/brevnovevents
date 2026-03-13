import { z } from "zod";

export const weddingSchema = z.object({
  name: z.string().min(1, "Toto pole je povinné."),
  email: z.string().email("Zadejte platnou e-mailovou adresu."),
  phone: z.string().min(1, "Toto pole je povinné."),
  preferredDate: z.string().min(1, "Toto pole je povinné."),
  guestCount: z.string().min(1, "Toto pole je povinné."),
  celebrationType: z.string().min(1, "Vyberte alespoň jednu možnost."),
  catering: z.string().min(1, "Toto pole je povinné."),
  vision: z.string().optional(),
  source: z.string().optional(),
  website: z.string().optional(),
});

export type WeddingFormData = z.infer<typeof weddingSchema>;

export const weddingGuestCountOptions = [
  "Do 30",
  "30–60",
  "60–100",
  "100–150",
  "150–200",
  "Nad 200",
];

export const celebrationTypeOptions = [
  "Venkovní obřad",
  "Slavnostní hostina",
  "Cocktail reception",
  "Afterparty",
  "Celý svatební den",
];

export const weddingCateringOptions = [
  "Ano, prosím o nabídku",
  "Zatím jen pronájem prostor",
  "Chci se poradit",
];

export const weddingSourceOptions = [
  "Doporučení",
  "Google",
  "Instagram",
  "Svatební portál",
  "Byli jsme na akci v klášteře",
  "Jiné",
];
