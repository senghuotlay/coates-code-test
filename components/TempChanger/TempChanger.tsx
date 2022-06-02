import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { TempModeType } from "../TempMode";

type TempChangerProps = {
  selectedMode: TempModeType;
  setStandardMode: () => void;
  setMetricMode: () => void;
  setImperialMode: () => void;
};

export const TempChanger = ({
  selectedMode,
  setImperialMode,
  setMetricMode,
  setStandardMode,
}: TempChangerProps) => {
  return (
    <Box marginTop={5} position={"relative"}>
      <Button
        variant={selectedMode === "standard" ? "solid" : "none"}
        onClick={setStandardMode}
      >
        K
      </Button>
      <Button
        variant={selectedMode === "metric" ? "solid" : "none"}
        onClick={setMetricMode}
      >
        C
      </Button>
      <Button
        variant={selectedMode === "imperial" ? "solid" : "none"}
        onClick={setImperialMode}
      >
        F
      </Button>
    </Box>
  );
};
