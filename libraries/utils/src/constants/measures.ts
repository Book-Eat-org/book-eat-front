import { Measures } from "../enums/measures.ts";

export const MEASURES_CONFIG: Record<Measures, { name: string }> = {
  [Measures.gr]: { name: "гр." },
  [Measures.ml]: { name: "мл." },
};
