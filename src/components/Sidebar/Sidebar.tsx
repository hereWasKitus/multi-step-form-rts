import { activeStepAtom } from "@/atoms";
import { steps } from "@/data";
import clsx from "clsx";
import { useAtom } from "jotai";

function Sidebar() {
  const [activeStep] = useAtom(activeStepAtom);

  return (
    <aside
      className={clsx([
        "basis-[274px] rounded-md bg-white bg-[url(@/assets/images/bg-sidebar-desktop.svg)] px-8 py-10",
        "bg-cover md:basis-[172px] md:rounded-none md:bg-[url(@/assets/images/bg-sidebar-mobile.svg)] md:bg-no-repeat md:py-8",
      ])}
    >
      <ul
        className={clsx(["grid gap-8", "md:flex md:justify-center md:gap-4"])}
      >
        {steps.map((step, index) => (
          <li
            key={step.name}
            data-active={activeStep === step.name}
            className="group flex w-fit cursor-default gap-x-4 gap-y-1"
          >
            <div
              className={clsx([
                "relative row-span-2 flex h-8 w-8 items-center justify-center",
                "text-body-md font-bold uppercase text-white group-data-[active=true]:text-marine-blue",
                "rounded-full border border-white bg-transparent group-data-[active=true]:border-light-blue ",
              ])}
            >
              <span className="z-10">{index + 1}</span>
              <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-all group-data-[active=true]:h-full group-data-[active=true]:w-full group-data-[active=true]:bg-light-blue" />
            </div>
            <div className="flex flex-col md:hidden">
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
