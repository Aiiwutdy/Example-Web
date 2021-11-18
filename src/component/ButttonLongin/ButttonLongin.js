import React from "react";
import "./ButttonLongin.css";

const ButttonLongin = ({
  text,
  onClick,
  isButton = true,
  className,
  disabled,
}) => {
  return (
    <div
      onClick={() => !disabled && onClick && onClick()}
      className={
        (isButton ? "button-longin" : "text") +
        " " +
        className +
        (disabled && "disabled")
      }
    >
      {text}
    </div>
  );
};

export default ButttonLongin;
