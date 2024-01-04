import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { FormFields } from "@/types";
import { useFormContext } from "react-hook-form";

function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>();

  return (
    <div className="flex h-full flex-col">
      <h1 className="heading">Personal info</h1>
      <p className="mb-9 text-body-lg text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex grow flex-col">
        <div className="flex flex-col gap-6">
          <Input
            autoComplete="name"
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
            errorMessage={errors.name && errors.name.message}
            {...register("name")}
          />
          <Input
            autoComplete="email"
            label="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            errorMessage={errors.email && errors.email.message}
            {...register("email")}
          />
          <Input
            autoComplete="phone"
            label="Phone Number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            errorMessage={errors.phone && errors.phone.message}
            {...register("phone")}
          />
        </div>
        <div className="mt-auto text-right">
          <Button type="submit">Next Step</Button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
