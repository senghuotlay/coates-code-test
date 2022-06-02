import { createContext } from "react";
import { TempModeType } from "./types";

type TempModeContextType = {
  setMode: (mode: TempModeType) => void;
  mode: "metric" | "standard" | "imperial";
};

export const TempModeContext = createContext<TempModeContextType>({
  mode: "metric",
  setMode: () => {},
});
