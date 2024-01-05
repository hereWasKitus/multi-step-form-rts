import iconArcade from "@/assets/images/icon-arcade.svg";
import iconAdvanced from "@/assets/images/icon-advanced.svg";
import iconPro from "@/assets/images/icon-pro.svg";

export const plans = [
  {
    name: "arcade",
    label: "Arcade",
    perMonth: 9,
    perYear: 90,
    icon: iconArcade,
  },
  {
    name: "advanced",
    label: "Advanced",
    perMonth: 12,
    perYear: 120,
    icon: iconAdvanced,
  },
  {
    name: "pro",
    label: "Pro",
    perMonth: 15,
    perYear: 150,
    icon: iconPro,
  },
];

export const addOns = [
  {
    name: "onlineService",
    label: "Online service",
    description: "Access to multiplayer games",
    perMonth: 1,
    perYear: 10,
  },
  {
    name: "largerStorage",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    perMonth: 2,
    perYear: 20,
  },
  {
    name: "customizableProfile",
    label: "Customizable profile",
    description: "Custom theme on your profile",
    perMonth: 2,
    perYear: 20,
  },
];

export const steps = [
  {
    name: "info",
    label: "your info",
  },
  {
    name: "plan",
    label: "select plan",
  },
  {
    name: "addons",
    label: "add-ons",
  },
  {
    name: "summary",
    label: "summary",
  },
];
