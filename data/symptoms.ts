import type { Symptom } from "types/commonTypes";
import skolPic from "public/skolios.png";
import handPic from "public/hand.png";
import mouthPic from "public/mouth.png";
import lungsPic from "public/lungs.png";
import legsPic from "public/legs.png";
import bonesPic from "public/bones.png";
import hipPic from "public/hip.png";
import bodyPic from "public/body.png";

export const symptomsArray: Symptom[] = [
  {
    forPatientId: 1,
    description: "Сколиоз",
    image: skolPic,
  },
  {
    forPatientId: 1,
    description:
      "Ограниченная способность поднимать руки и переносить предметы",
    image: handPic,
  },
  {
    forPatientId: 1,
    description: "Нарушения жевания и глотания",
    image: mouthPic,
  },
  {
    forPatientId: 1,
    description: "Дыхательная недостаточность/ респираторная дисфункция",
    image: lungsPic,
  },
  {
    forPatientId: 1,
    description: "Неспособность бегать, изменение походки",
    image: legsPic,
  },
  {
    forPatientId: 1,
    description: "Контрактура суставов",
    image: bonesPic,
  },
  {
    forPatientId: 1,
    description: "Вывих бедра",
    image: hipPic,
  },
  {
    forPatientId: 1,
    description: "Утомляемость",
    image: bodyPic,
  },
  {
    forPatientId: 2,
    description: "Контрактура суставов",
    image: bonesPic,
  },
  {
    forPatientId: 2,
    description: "Вывих бедра",
    image: hipPic,
  },
  {
    forPatientId: 2,
    description: "Утомляемость",
    image: bodyPic,
  },
  {
    forPatientId: 2,
    description: "Сколиоз",
    image: skolPic,
  },
  {
    forPatientId: 2,
    description:
      "Ограниченная способность поднимать руки и переносить предметы",
    image: handPic,
  },
  {
    forPatientId: 2,
    description: "Нарушения жевания и глотания",
    image: mouthPic,
  },
  {
    forPatientId: 2,
    description: "Дыхательная недостаточность/ респираторная дисфункция",
    image: lungsPic,
  },
  {
    forPatientId: 2,
    description: "Неспособность бегать, изменение походки",
    image: legsPic,
  },
];
