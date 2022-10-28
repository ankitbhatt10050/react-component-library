import React from "react";
import styles from "./BlobButton.module.scss";

export interface ButtonProps {
  label: string;
}

const SlideEffect = (props: ButtonProps) => {
  return <button className={styles.btn}>button</button>;
};

export default SlideEffect;
