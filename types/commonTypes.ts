import { StaticImageData } from "next/image";

export type Patient = {
  id: number;
  category: string;
  image: StaticImageData;
  cases: string[];
};

export type Symptom = {
  forPatientId: number;
  description: string;
  image: StaticImageData;
};
