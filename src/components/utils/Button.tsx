import React from "react";
import { Loader2 } from "lucide-react";

type ButtonType = "primary" | "secondary" | "outline" | "ghost"; // Extended types

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mainText: string;
  variant: ButtonType;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
}

const buttonSizeClassMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const buttonTypeClassMap: Record<ButtonType, string> = {
  primary:
    "bg-gradient-to-r from-green-600 to-green-700 text-white border-0 shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 active:scale-95 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
  secondary:
    "bg-white text-green-700 border-2 border-green-600 shadow-md hover:shadow-lg hover:bg-green-50 hover:border-green-700 active:scale-95 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
  outline:
    "bg-transparent text-green-600 border-2 border-green-600 shadow-sm hover:shadow-md hover:bg-green-600 hover:text-white active:scale-95 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
  ghost:
    "bg-transparent text-green-600 border-0 shadow-none hover:bg-green-50 hover:text-green-700 active:scale-95 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
};

export function MainButton({
  mainText,
  variant,
  size = "md",
  loading = false,
  icon,
  className = "",
  disabled,
  ...rest
}: MainButtonProps) {
  const baseClass =
    buttonTypeClassMap[variant] || buttonTypeClassMap["secondary"];
  const sizeClass = buttonSizeClassMap[size];
  const isDisabled = disabled || loading;

  return (
    <button
      className={`
        ${baseClass} 
        ${sizeClass} 
        font-semibold 
        rounded-xl 
        focus:outline-none 
        focus:ring-4 
        focus:ring-green-500/20 
        flex 
        items-center 
        justify-center 
        gap-2 
        min-h-[44px]
        ${className}
      `.trim()}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        icon && <span className="flex-shrink-0">{icon}</span>
      )}
      <span className={loading ? "opacity-70" : ""}>{mainText}</span>
    </button>
  );
}
