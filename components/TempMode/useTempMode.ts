import { useContext } from "react";
import { TempModeContext } from "./Context";

export const useTempMode = () => {
  const context = useContext(TempModeContext);
  if (!context)
    throw Error(
      "useTempMode can only be used within <TempModeContextProvider />"
    );

  return context;
};
