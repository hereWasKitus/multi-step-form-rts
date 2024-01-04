import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

function Checkbox(props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <label className="relative flex h-5 w-5 items-center justify-center rounded-[0.25rem] border border-light-gray transition-colors has-[:checked]:bg-purplish-blue">
      <input
        type="checkbox"
        className="absolute left-0 top-0 h-[1px] w-[1px] overflow-hidden opacity-0"
        {...props}
        ref={ref}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="9"
        viewBox="0 0 12 9"
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="m1 4 3.433 3.433L10.866 1"
        />
      </svg>
    </label>
  );
}

export default forwardRef<HTMLInputElement, CheckboxProps>(Checkbox);
