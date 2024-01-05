import { atom, useAtom } from "jotai";
import { steps } from "./data";

export const activeStepAtom = atom<(typeof steps)[number]["name"]>(
  steps[0].name,
);

const isFinishedAtom = atom(false);

export const useIsFinished = () => useAtom(isFinishedAtom);
