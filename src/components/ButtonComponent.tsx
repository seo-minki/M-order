"use client";

interface ButtonProps {
  classNames: string,
  buttonText: string,
  isDisabled?: boolean,
  handleClick: () => void
}

const ButtonComponent = ({classNames, buttonText, isDisabled, handleClick}: ButtonProps) => {
  const clickButton = () => {
    handleClick();
  }

  return (
    <button className={classNames} onClick={clickButton} disabled={isDisabled}>{ buttonText }</button>
  )
}

export default ButtonComponent;