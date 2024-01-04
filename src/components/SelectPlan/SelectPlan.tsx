import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import { plans } from "@/data";
import { activeStepAtom } from "@/atoms";
import { FormFields } from "@/types";
import { useSetAtom } from "jotai";
import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";

function SelectPlan() {
  const setActiveStep = useSetAtom(activeStepAtom);
  const { register, setValue, watch } = useFormContext<FormFields>();
  const isYearly = watch("subscriptionType") === "yearly";

  function handleSubscriptionTypeChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(
      "subscriptionType",
      e.currentTarget.checked ? "yearly" : "monthly",
    );
  }

  return (
    <div className="flex h-full flex-col">
      <h1 className="heading">Select your plan</h1>
      <p className="subheading">
        You have the option of monthly or yearly billing.
      </p>

      <ul className="mb-8 grid grid-cols-3 gap-4">
        {plans.map((plan) => {
          const priceString = isYearly
            ? `$${plan.perYear}/yr`
            : `$${plan.perMonth}/mo`;
          return (
            <li key={plan.name}>
              <label className="relative block cursor-pointer rounded-sm border border-border-gray bg-white px-4 py-5 transition-colors hover:border-purplish-blue has-[:checked]:border-purplish-blue has-[:focus]:border-purplish-blue has-[:checked]:bg-alabaster">
                <div className="mb-10">
                  <img src={plan.icon} alt={`${plan.name} icon`} />
                </div>
                <h3 className="mb-2 text-body-lg font-medium leading-none text-marine-blue">
                  {plan.name}
                </h3>
                <p className="text-body-md text-cool-gray">{priceString}</p>
                <input
                  value={plan.name}
                  type="radio"
                  {...register("plan")}
                  className="absolute left-0 top-0 h-[1px] w-[1px] overflow-hidden opacity-0"
                />
              </label>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center gap-6 rounded-sm bg-alabaster py-[14px]">
        <span className="text-body-md font-bold text-marine-blue">Monthly</span>
        <Switch checked={isYearly} onChange={handleSubscriptionTypeChange} />
        <span className="text-body-md font-bold text-cool-gray">Yearly</span>
      </div>

      <div className="mt-auto flex justify-between">
        <Button
          type="button"
          data-variant="ghost"
          onClick={() => setActiveStep("info")}
        >
          Go Back
        </Button>
        <Button type="submit">Next Step</Button>
      </div>
    </div>
  );
}

export default SelectPlan;
