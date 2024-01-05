import clsx from "clsx";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, errorMessage, id, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div>
        {Boolean(label) && (
          <label
            htmlFor={id}
            className={clsx([
              "mb-2 inline-block text-body-md text-marine-blue",
              "md:mb-1 md:text-body-sm",
            ])}
          >
            {label}
          </label>
        )}

        {Boolean(errorMessage) && (
          <span
            className={clsx([
              "float-right mb-2 inline-block text-body-md font-bold text-strawberry-red",
              "md:mb-1 md:text-body-sm",
            ])}
          >
            {errorMessage}
          </span>
        )}

        <input
          id={id}
          className={clsx(
            [
              "w-full px-4 py-3",
              "rounded-sm border border-border-gray bg-white focus-within:outline-purplish-blue hover:border-purplish-blue",
              "placeholder:text-body-lg placeholder:font-medium",
              "transition-all",
              Boolean(errorMessage) &&
                "border-strawberry-red focus-within:outline-strawberry-red hover:border-strawberry-red",
            ],
            {},
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

export default Input;
