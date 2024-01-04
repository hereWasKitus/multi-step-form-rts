import { FormHTMLAttributes } from "react";

export type StepProps = {
  index: number;
  isActive: boolean;
  goNext: () => void;
  goPrevoius: () => void;
};

type StepRendererFunction = (input: StepProps) => JSX.Element;

type MultiStepFormProps = {
  steps: StepRendererFunction[];
  currentIndex: number;
  onStepChange: (index: number) => void;
} & FormHTMLAttributes<HTMLFormElement>;

export const MultiStepForm = ({
  steps = [],
  currentIndex = 0,
  onStepChange,
  ...formProps
}: MultiStepFormProps) => {
  return (
    <form {...formProps}>
      {steps.map((step, index) => {
        const isActive = currentIndex === index;
        if (!isActive) return null;
        const isFirstStep = currentIndex - 1 < 0;
        const isLastStep = currentIndex === steps.length - 1;
        return step({
          index,
          isActive,
          goNext: () => (isLastStep ? null : onStepChange(index + 1)),
          goPrevoius: () => (isFirstStep ? null : onStepChange(index - 1)),
        });
      })}
    </form>
  );
};
