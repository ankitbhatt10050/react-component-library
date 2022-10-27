import React from "react";
import "./WavyButton.css";

export interface ButtonProps {
  label: string;
}

const WavyButton = (props: ButtonProps) => {
  return (
    <a href="#">
      button
      <div className="wave"></div>
    </a>
  );
};

export default WavyButton;
