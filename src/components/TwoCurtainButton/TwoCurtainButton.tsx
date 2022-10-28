import React from "react";
import styles from "./TwoCurtainButton.module.scss";

export interface ButtonProps {
  label: string;
}

const TwoCurtainButton = (props: ButtonProps) => {
  return (
    <div className={styles.container}>
      <a href="#">{props.label}</a>
    </div>
  );
};

export default TwoCurtainButton;
