import React from "react";
import styles from "./WavyButton.module.scss";

export interface ButtonProps {
  label: string;
}

const WavyButton = (props: ButtonProps) => {
  return (
    <a className={styles.anchor} href="#">
      {props.label}
      <div className={styles.wave}></div>
    </a>
  );
};

export default WavyButton;
