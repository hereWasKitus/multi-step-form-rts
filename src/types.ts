import * as v from "valibot";
import { addOns, plans } from "./data";

export type PlanUnion = (typeof plans)[number]["name"];

export type AddOnsUnion = (typeof addOns)[number]["name"];

export const FormSchema = v.object({
  name: v.string("Must be a string", [v.minLength(3, "At least 3 characters")]),
  email: v.string([v.email("Invalid email")]),
  phone: v.string([
    v.regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Invalid phone number",
    ),
  ]),
  // plan: v.union(plans.map((plan) => v.literal(plan.name))),
  // subscriptionType: v.union([v.literal("monthly"), v.literal("yearly")]),
  // addOns: v.array(v.union(addOns.map((addOn) => v.literal(addOn.name)))),
});

export type FormFields = v.Input<typeof FormSchema> & {
  plan: PlanUnion;
  subscriptionType: "monthly" | "yearly";
  addOns: AddOnsUnion[];
};
