import { activeStepAtom } from "@/atoms";
import { steps } from "@/data";
import clsx from "clsx";
import { useAtom } from "jotai";

function Sidebar() {
  const [activeStep] = useAtom(activeStepAtom);

  return (
    <aside className="basis-[274px] rounded-md bg-white bg-[url(@/assets/images/bg-sidebar-desktop.svg)] px-8 py-10">
      <ul className="grid gap-8">
        {steps.map((step, index) => (
          <li
            key={step.name}
            data-active={activeStep === step.name}
            className="group flex w-fit cursor-default gap-x-4 gap-y-1"
          >
            <div
              className={clsx([
                "row-span-2 flex h-8 w-8 items-center justify-center",
                "text-body-md font-bold uppercase text-white group-data-[active=true]:text-marine-blue",
                "rounded-full border border-white bg-transparent group-data-[active=true]:border-light-blue group-data-[active=true]:bg-light-blue",
              ])}
            >
              {index + 1}
            </div>
            <div className="flex flex-col">
              <p className="text-body-sm uppercase text-light-blue">
                step {index + 1}
              </p>
              <h3 className="text-body-md uppercase tracking-wider text-white">
                {step.label}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
