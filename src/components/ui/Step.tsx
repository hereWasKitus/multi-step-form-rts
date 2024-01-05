import clsx from "clsx";
import { PropsWithChildren } from "react";

type StepProps = {} & PropsWithChildren;

const Step = ({ children }: StepProps) => {
  return (
    <div className={clsx(["flex h-full flex-col", "md:px-4"])}>{children}</div>
  );
};

type BodyProps = {} & PropsWithChildren;

const Body = ({ children }: BodyProps) => {
  return (
    <div className="h-full md:-mt-16 md:h-fit md:rounded-md md:bg-white md:px-6 md:py-8">
      {children}
    </div>
  );
};

type BottomProps = {
  alignment?: "between" | "end" | "right";
} & PropsWithChildren;

const Bottom = ({ children, alignment = "between" }: BottomProps) => {
  return (
    <div
      className={clsx([
        `mt-auto flex justify-${alignment}`,
        "md:-mx-4 md:bg-white md:p-4",
      ])}
    >
      {children}
    </div>
  );
};

Step.Body = Body;
Step.Bottom = Bottom;

export default Step;
