import { useState } from "react";

import type { Patient, Symptom } from "types/commonTypes";
import { PatientCase } from "components/patientCase/patientCase";
import { RadialSymptoms } from "components/radialSymptoms/radialSymptoms";
import styles from "components/selectPatient/selectPatient.module.css";

type SelectPatientProps = {
  patients: Patient[];
  symptoms: Symptom[];
};

export const SelectPatient = ({ patients, symptoms }: SelectPatientProps) => {
  const [activePatient, setActivePatient] = useState(patients[0].id);
  const listOfPatients = patients.map((patient, index) => {
    return (
      <PatientCase
        id={patient.id}
        cases={patient.cases}
        image={patient.image}
        category={patient.category}
        key={index}
        setActivePatient={setActivePatient}
        activePatient={activePatient}
      />
    );
  });

  const listOfRadialSymptoms = patients.map((patient) => {
    let arrOfSymptoms = [];
    for (let symptom of symptoms) {
      if (symptom.forPatientId === patient.id) {
        arrOfSymptoms.push(symptom);
      }
    }
    return (
      <RadialSymptoms
        patientId={patient.id}
        patientCategory={patient.category}
        patientImage={patient.image}
        key={patient.id}
        symptoms={arrOfSymptoms}
        activePatient={activePatient}
      />
    );
  });

  return (
    <section className={styles["choose-patient"]}>
      <h2 className={styles["choose-patient__title"]}>
        Выберите, кто ваш пациент:
      </h2>
      <div className={styles["choose-patient__patients"]}>{listOfPatients}</div>
      <p className={styles["choose-patient__text"]}>
        Сообщает ли один из ваших пациентов о следующих симптомах?{" "}
        <span className={styles["choose-patient__info"]}>
          (нажмите на любую иконку и узнайте больше)
        </span>
      </p>
      {listOfRadialSymptoms}
    </section>
  );
};
