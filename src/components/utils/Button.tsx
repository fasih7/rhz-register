import React from "react";

type ButtonType = "primary" | "secondary"; // Extendable for future types

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mainText: string;
  variant: ButtonType;
}

const buttonTypeClassMap: Record<ButtonType, string> = {
  primary:
    "bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition",
  secondary:
    "border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition",
};

export function MainButton({
  mainText,
  variant,
  className = "",
  ...rest
}: MainButtonProps) {
  const baseClass =
    buttonTypeClassMap[variant] || buttonTypeClassMap["secondary"];
  return (
    <button className={`${baseClass} ${className}`.trim()} {...rest}>
      {mainText}
    </button>
  );
}
