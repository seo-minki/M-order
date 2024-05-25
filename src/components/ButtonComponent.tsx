"use client";

interface ButtonProps {
  classNames: string,
  buttonText: string,
  isDisabled?: boolean,
  handleClick: () => void
}

const ButtonComponent = ({classNames, buttonText, isDisabled, handleClick}: ButtonProps) => {
  return (
    <button className={classNames} onClick={handleClick} disabled={isDisabled}>{ buttonText }</button>
  )
}

export default ButtonComponent;