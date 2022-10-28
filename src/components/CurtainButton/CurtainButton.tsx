import React from "react";
import styles from "./CurtainButton.module.scss";

export interface ButtonProps {
  label: string;
}

const SlideEffect = (props: ButtonProps) => {
  return (
    <div className={styles.container}>
      <a href="#">{props.label}</a>
    </div>
  );
};

export default SlideEffect;
