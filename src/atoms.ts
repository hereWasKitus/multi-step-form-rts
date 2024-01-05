import { atom, useAtom } from "jotai";
import { steps } from "./data";

export const activeStepAtom = atom<(typeof steps)[number]["name"]>(
  steps[1].name,
);

const isFinishedAtom = atom(false);

export const useIsFinished = () => useAtom(isFinishedAtom);
