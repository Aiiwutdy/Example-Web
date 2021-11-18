import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({
  text,
  onClick,
  isButton = true,
  className,
  disabled,
}) => {
  return (
    <div
      onClick={() => !disabled && onClick()}
      className={
        (isButton ? "button" : "text") +
        " " +
        className +
        (disabled && "disabled")
      }
    >
      {text}
    </div>
  );
};

export default PrimaryButton;
