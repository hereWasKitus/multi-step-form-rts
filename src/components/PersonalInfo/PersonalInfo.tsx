import Button from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input";
import { FormFields } from "@/types";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { Step } from "@/components/ui/Step";

function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>();

  return (
    <Step>
      <Step.Body>
        <h1 className="heading">Personal info</h1>

        <p className="subheading">
          Please provide your name, email address, and phone number.
        </p>
        <div className={clsx(["flex flex-col gap-6", "md:gap-4"])}>
          <Input
            id="name"
            autoComplete="name"
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
            errorMessage={errors.name && errors.name.message}
            {...register("name")}
          />
          <Input
            id="email"
            autoComplete="email"
            label="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            errorMessage={errors.email && errors.email.message}
            {...register("email")}
          />
          <Input
            id="phone"
            autoComplete="tel"
            label="Phone Number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            errorMessage={errors.phone && errors.phone.message}
            {...register("phone")}
          />
        </div>
      </Step.Body>

      <Step.Bottom alignment="end">
        <Button type="submit">Next Step</Button>
      </Step.Bottom>
    </Step>
  );
}

export default PersonalInfo;
