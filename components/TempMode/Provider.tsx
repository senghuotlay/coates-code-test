import { ReactNode, useState } from "react";
import { TempModeContext } from "./Context";
import { TempModeType } from "./types";

export const TempModeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<TempModeType>("metric");

  return (
    <TempModeContext.Provider
      value={{
        mode: mode,
        setMode: setMode,
      }}
    >
      {children}
    </TempModeContext.Provider>
  );
};
