import Image from "next/image";

import { Symptom } from "types/commonTypes";
import styles from "components/radialSymptoms/radialSymptoms.module.css";
import { useState } from "react";

type RadialToggleItemProps = {
  style: React.CSSProperties;
  symptom: Symptom;
  index: number;
  totalElements: number;
};

export const RadialToggleItem = ({
  style,
  symptom,
  index,
  totalElements,
}: RadialToggleItemProps) => {
  const [isActive, setActive] = useState(false);

  function changeToggleOnClick() {
    setActive(!isActive);
  }

  function setStyleForDescription(): React.CSSProperties {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1264) {
        return {};
      }
    }
    if (index === 0) {
      return { top: "-25px", left: "-45px", textAlign: "center" };
    }
    if (index < totalElements / 2) {
      return { top: "45px", right: "-230px" };
    }
    if (index === totalElements / 2) {
      return { left: "-45px", textAlign: "center" };
    }
    return { top: "25px", left: "-255px", textAlign: "right" };
  }

  return (
    <>
      <div
        style={style}
        className={styles["radial-menu__item"]}
        onClick={changeToggleOnClick}
      >
        <div
          style={{ backgroundImage: `url(${symptom.image.src})` }}
          className={styles["radial-menu__icon"]}
        ></div>
        {isActive && (
          <p
            className={styles["radial-menu__description"]}
            style={setStyleForDescription()}
          >
            {symptom.description}
          </p>
        )}
      </div>
    </>
  );
};
