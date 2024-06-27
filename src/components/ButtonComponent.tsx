"use client";

import { ReactNode } from "react";

interface ButtonProps {
  classNames: string;
  buttonText: string;
  isDisabled?: boolean;
  handleClick: () => void;
  children?: ReactNode;
}

const ButtonComponent = ({
  classNames,
  buttonText,
  isDisabled,
  handleClick,
  children,
}: ButtonProps) => {
  return (
    <button className={classNames} onClick={handleClick} disabled={isDisabled}>
      {children}
      {buttonText}
    </button>
  );
};

export default ButtonComponent;
