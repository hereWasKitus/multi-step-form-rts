import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { addOns } from "@/data";
import { activeStepAtom } from "@/atoms";
import { FormFields } from "@/types";
import { useSetAtom } from "jotai";
import { useFormContext } from "react-hook-form";

function AddOns() {
  const setActiveStep = useSetAtom(activeStepAtom);
  const { register, watch } = useFormContext<FormFields>();
  const isYearly = watch("subscriptionType") === "yearly";

  return (
    <div className="flex h-full flex-col">
      <h1 className="heading">Pick add-ons</h1>
      <p className="subheading">Add-ons help enhance your gaming experience.</p>

      <ul className="mb-8 grid gap-4">
        {addOns.map((addOn) => {
          const priceString = isYearly
            ? `$${addOn.perYear}/yr`
            : `$${addOn.perMonth}/mo`;
          return (
            <li key={addOn.name}>
              <label className="flex cursor-pointer items-center gap-6 rounded-sm border border-border-gray bg-white px-6 py-5 transition-colors hover:border-purplish-blue has-[:checked]:border-purplish-blue has-[:focus]:border-purplish-blue has-[:checked]:bg-alabaster">
                <Checkbox
                  id={addOn.name}
                  value={addOn.name}
                  {...register("addOns")}
                />
                <div className="grow">
                  <h3 className="mb-2 text-body-lg font-medium leading-none text-marine-blue">
                    {addOn.label}
                  </h3>
                  <p className="text-body-md text-cool-gray">
                    {addOn.description}
                  </p>
                </div>
                <span className="text-body-md text-purplish-blue">
                  {priceString}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto flex justify-between">
        <Button
          type="button"
          data-variant="ghost"
          onClick={() => setActiveStep("plan")}
        >
          Go Back
        </Button>
        <Button type="submit">Next Step</Button>
      </div>
    </div>
  );
}

export default AddOns;
