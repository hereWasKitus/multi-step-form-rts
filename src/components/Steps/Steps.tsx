import { useAtom } from "jotai";
import { AddOns } from "../AddOns";
import { PersonalInfo } from "../PersonalInfo";
import { SelectPlan } from "../SelectPlan";
import { Summary } from "../Summary";
import { useCallback } from "react";
import { activeStepAtom, useIsFinished } from "@/atoms";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormFields, FormSchema } from "@/types";
import { plans, steps } from "@/data";
import { ThankYou } from "../ThankYou";
import clsx from "clsx";

function Steps() {
  const [activeStep, setActiveStep] = useAtom(activeStepAtom);
  const [finished, setFinished] = useIsFinished();
  const methods = useForm<FormFields>({
    resolver: valibotResolver(FormSchema),
    defaultValues: {
      plan: plans[0].name,
      subscriptionType: "monthly",
      addOns: [],
    },
  });

  const onSubmit: SubmitHandler<FormFields> = () => {
    const currentIndex = steps.findIndex((step) => step.name === activeStep);
    const nextIndex = currentIndex + 1;

    if (nextIndex === steps.length) {
      setFinished(true);
    }

    setActiveStep(steps[nextIndex]?.name);
  };

  const renderStep = useCallback(() => {
    if (finished) {
      return <ThankYou />;
    }

    switch (activeStep) {
      case "info":
        return <PersonalInfo />;
      case "plan":
        return <SelectPlan />;
      case "addons":
        return <AddOns />;
      case "summary":
        return <Summary />;
      default:
        return <div>no :(</div>;
    }
  }, [activeStep]);

  return (
    <div className="flex grow">
      <FormProvider {...methods}>
        <form
          action="#"
          className={clsx([
            "mx-auto w-full max-w-md pt-10",
            "md:max-w-none md:pt-0",
          ])}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {renderStep()}
        </form>
      </FormProvider>
    </div>
  );
}

export default Steps;
