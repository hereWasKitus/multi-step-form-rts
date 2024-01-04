import Button from "@/components/ui/Button";
import { addOns, plans } from "@/data";
import { activeStepAtom } from "@/atoms";
import { FormFields } from "@/types";
import { useSetAtom } from "jotai";
import { useFormContext } from "react-hook-form";

function Summary() {
  const { getValues } = useFormContext<FormFields>();
  const { subscriptionType, plan: formPlan, addOns: formAddOns } = getValues();
  const setActiveStep = useSetAtom(activeStepAtom);
  const isYearly = subscriptionType === "yearly";
  const selectedPlan = plans.find((plan) => plan.name === formPlan);
  const selectedAddOns = addOns.filter((addOn) =>
    formAddOns.includes(addOn.name),
  );

  const planPrice = isYearly ? selectedPlan?.perYear : selectedPlan?.perMonth;
  const additionalPrice = selectedAddOns.reduce(
    (acc, current) =>
      isYearly ? acc + current.perYear : acc + current.perMonth,
    0,
  );
  const priceLabel = isYearly ? "yr" : "mo";
  const totalPrice = (planPrice ?? 0) + additionalPrice;

  return (
    <div className="flex h-full flex-col">
      <h1 className="heading">Finishing up</h1>
      <p className="subheading">
        Double-check everything looks OK before confirming.
      </p>

      <div className="mb-6 rounded-sm bg-alabaster px-6 py-4">
        <table className="w-full table-auto">
          <tbody>
            <tr>
              <td className="">
                <h3 className="text-body-lg font-medium text-marine-blue">
                  {selectedPlan?.name} ({isYearly ? "Yearly" : "Monthly"})
                </h3>
                <button
                  className="text-body-md text-cool-gray underline"
                  onClick={() => setActiveStep("plan")}
                >
                  Change
                </button>
              </td>
              <td className="text-right text-body-lg font-medium text-marine-blue">
                ${`${planPrice}/${priceLabel}`}
              </td>
            </tr>
            {Boolean(selectedAddOns.length) && (
              <>
                <tr>
                  <td colSpan={2} className="pb-4 pt-6">
                    <hr />
                  </td>
                </tr>
                {selectedAddOns.map((addOn) => {
                  const price = isYearly ? addOn.perYear : addOn.perMonth;
                  return (
                    <tr key={addOn.name}>
                      <td className="pb-4 text-body-md text-cool-gray">
                        {addOn.label}
                      </td>
                      <td className="text-right text-body-md">
                        +{`${price}/${priceLabel}`}
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6">
        <span className="text-body-md text-cool-gray">
          Total ({isYearly ? "per year" : "per month"})
        </span>
        <span className="text-xl font-bold text-purplish-blue">
          ${`${totalPrice}/${priceLabel}`}
        </span>
      </div>

      <div className="mt-auto flex justify-between">
        <Button
          type="button"
          data-variant="ghost"
          onClick={() => setActiveStep("addons")}
        >
          Go Back
        </Button>
        <Button type="submit" className="bg-purplish-blue">
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default Summary;
