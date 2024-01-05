import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        [
          "rounded-sm",
          "px-6",
          "py-[15px]",
          "font-medium",
          "transition-all",
          "active:scale-95",
          "bg-marine-blue",
          "text-white",
          "hover:bg-[#164A8A]",
          "disabled:pointer-events-none disabled:cursor-default disabled:opacity-85",
        ],
        [
          "data-[variant=ghost]:bg-white",
          "data-[variant=ghost]:text-cool-gray",
          "data-[variant=ghost]:hover:bg-slate-100",
        ],
        "md:px-4 md:py-3 md:text-body-md",
      )}
    >
      {children}
    </button>
  );
}

export default Button;
