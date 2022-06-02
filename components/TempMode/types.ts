export const TempModeEnum = {
  metric: "C", // celsius
  standard: "K", // kelvin
  imperial: "F", // fahrenheit
};

export type TempModeType = keyof typeof TempModeEnum;
