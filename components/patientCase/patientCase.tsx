import Image from "next/image";

import type { Patient } from "types/commonTypes";
import styles from "components/patientCase/patientCase.module.css";
import { url } from "inspector";

type PatientCaseProps = Patient & {
  setActivePatient: (id: number) => void;
  activePatient: number;
};
export const PatientCase = ({
  category,
  image,
  cases,
  id,
  setActivePatient,
  activePatient,
}: PatientCaseProps) => {
  const listOfCases = cases.map((singleCase, index) => {
    return (
      <p key={index} className={styles["patient-card__case"]}>
        {singleCase}
      </p>
    );
  });

  function changeActivePatientOnClick() {
    if (activePatient !== id) {
      setActivePatient(id);
    }
  }

  return (
    <div className={styles["patient-card"]}>
      <div
        className={styles["patient-card__top"]}
        onClick={changeActivePatientOnClick}
        role="button"
      >
        <span className={styles["patient-card__name"]}>{category}</span>
        <div
          className={styles["patient-card__image-box"]}
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>
      </div>
      <div className={styles["patient-card__bottom"]}>{listOfCases}</div>
    </div>
  );
};
