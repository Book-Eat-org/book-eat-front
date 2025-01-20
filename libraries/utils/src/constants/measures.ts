import { Measures } from "../enums/measures.ts";

export const MEASURES_CONFIG: Record<Measures, { name: string }> = {
  [Measures.gr]: { name: "гр." },
  [Measures.ml]: { name: "мл." },
  [Measures.kg]: { name: "кг." },
  [Measures.thing]: { name: "шт." },
  [Measures.portion]: { name: "порция" },
  [Measures.lt]: { name: "л." },
  [Measures.mg]: { name: "мг." },
};
