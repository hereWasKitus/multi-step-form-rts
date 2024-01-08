import { Button } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox/Checkbox";
import { addOns } from "@/data";
import { activeStepAtom } from "@/atoms";
import { FormFields } from "@/types";
import { useSetAtom } from "jotai";
import { useFormContext } from "react-hook-form";
import { Step } from "@/components/ui/Step";
import clsx from "clsx";

function AddOns() {
  const setActiveStep = useSetAtom(activeStepAtom);
  const { register, watch } = useFormContext<FormFields>();
  const isYearly = watch("subscriptionType") === "yearly";

  return (
    <Step>
      <Step.Body>
        <h1 className="heading">Pick add-ons</h1>

        <p className="subheading">
          Add-ons help enhance your gaming experience.
        </p>

        <ul className="mb-8 grid gap-4">
          {addOns.map((addOn) => {
            const priceString = isYearly
              ? `$${addOn.perYear}/yr`
              : `$${addOn.perMonth}/mo`;
            return (
              <li key={addOn.name}>
                <label
                  className={clsx([
                    "flex cursor-pointer items-center gap-6 rounded-sm border border-border-gray bg-white px-6 py-5 transition-colors hover:border-purplish-blue has-[:checked]:border-purplish-blue has-[:focus]:border-purplish-blue has-[:checked]:bg-alabaster",
                    "md:gap-4",
                  ])}
                >
                  <Checkbox
                    id={addOn.name}
                    value={addOn.name}
                    {...register("addOns")}
                  />
                  <div className="grow">
                    <h3
                      className={clsx([
                        "mb-2 text-body-lg font-medium leading-none text-marine-blue",
                        "md:mb-1 md:text-body-md",
                      ])}
                    >
                      {addOn.label}
                    </h3>
                    <p
                      className={clsx([
                        "text-body-md text-cool-gray",
                        "md:text-body-sm",
                      ])}
                    >
                      {addOn.description}
                    </p>
                  </div>
                  <span
                    className={clsx([
                      "text-body-md text-purplish-blue",
                      "md:text-body-sm",
                    ])}
                  >
                    {priceString}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </Step.Body>

      <Step.Bottom>
        <Button
          type="button"
          data-variant="ghost"
          onClick={() => setActiveStep("plan")}
        >
          Go Back
        </Button>
        <Button type="submit">Next Step</Button>
      </Step.Bottom>
    </Step>
  );
}

export default AddOns;
