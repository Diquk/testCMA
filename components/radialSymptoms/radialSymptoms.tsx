import { StaticImageData } from "next/image";
import { Symptom } from "types/commonTypes";
import { RadialToggleItem } from "components/radialSymptoms/radialToggleItem/radialToggleItem";
import styles from "components/radialSymptoms/radialSymptoms.module.css";
import { useEffect, useState } from "react";
import { useWindowSize } from "hooks/useWindowSize";

type RadialSymptomsProps = {
  patientId: number;
  patientCategory: string;
  patientImage: StaticImageData;
  symptoms: Symptom[];
  activePatient: number;
};

export const RadialSymptoms = ({
  patientId,
  patientCategory,
  patientImage,
  symptoms,
  activePatient,
}: RadialSymptomsProps) => {
  const [arrayOfSymptoms, setArrayOfSymptoms] = useState<JSX.Element[]>([]);
  const size = useWindowSize();

  useEffect(() => {
    let tmpArray = symptoms.map((symptom, index, symptomsArray) => {
      let style = {};
      if (size.width) {
        if (size.width < 1264) {
          style = {};
        } else {
          style = {
            "--i": index,
            "--length": symptomsArray.length,
            left:
              (
                42 -
                45 *
                  Math.cos(
                    1.5 * Math.PI -
                      2 * (1 / symptomsArray.length) * index * Math.PI
                  )
              ).toFixed(4) + "%",
            top:
              (
                50 -
                45 *
                  Math.sin(
                    -1.5 * Math.PI -
                      2 * (1 / symptomsArray.length) * index * Math.PI
                  )
              ).toFixed(4) + "%",
          } as React.CSSProperties;
        }
      }
      return (
        <RadialToggleItem
          style={style}
          index={index}
          symptom={symptom}
          totalElements={symptomsArray.length}
          key={index}
        />
      );
    });
    setArrayOfSymptoms(tmpArray);
  }, [size, symptoms]);
  return activePatient === patientId ? (
    <div className={styles["radial-menu"]}>
      <div
        className={styles["radial-menu__center"]}
        style={{ backgroundImage: `url(${patientImage.src})` }}
      ></div>
      <span className={styles["radial-menu__category"]}>{patientCategory}</span>
      {arrayOfSymptoms}
    </div>
  ) : null;
};
