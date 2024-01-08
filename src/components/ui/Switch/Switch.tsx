import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

function Switch(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label className="relative flex h-5 w-9 items-center rounded-full bg-marine-blue">
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className="peer absolute left-0 top-0 h-[1px] w-[1px] overflow-hidden opacity-0"
      />
      <span className="block h-3 w-3 translate-x-1 rounded-full bg-white transition-transform peer-checked:translate-x-5"></span>
    </label>
  );
}

export default forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(Switch);
