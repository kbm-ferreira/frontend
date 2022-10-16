import React from "react";
import { ButtonProps } from "../../pages/contato/contato.types";

export const ButtonComponent = ({
  width,
  height,
  color,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ color, height, width }}
      {...props}
    >
      {label}
    </button>
  );
};
