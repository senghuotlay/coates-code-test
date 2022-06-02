import { Box, ColorProps, TypographyProps } from "@chakra-ui/react";
import React from "react";
import { WeatherConditionMain } from "../Start/types/weatherCondition";

type IconSelectorProps = {
  condition: WeatherConditionMain;
  size?: TypographyProps["fontSize"];
  color?: ColorProps["color"];
};

const WeatherMapper: Record<WeatherConditionMain, string> = {
  Thunderstorm: "wi wi-thunderstorm",
  Atmosphere: "wi wi-fog",
  Clear: "wi wi-day-sunny",
  Clouds: "wi wi-cloud",
  Drizzle: "wi wi-sprinkle",
  Rain: "wi wi-rain",
  Snow: "wi wi-snow",
};

export const IconSelector = ({
  condition,
  size = "48",
  color = "white",
}: IconSelectorProps) => {
  return (
    <Box fontSize={size} color={color}>
      <i className={WeatherMapper[condition]}></i>
    </Box>
  );
};
