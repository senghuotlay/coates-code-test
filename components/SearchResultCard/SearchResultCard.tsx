import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  WeatherConditionDescription,
  WeatherConditionMain,
} from "../Start/types/weatherCondition";
import { IconSelector } from "../IconSelector";
import { TempModeEnum, useTempMode } from "../TempMode";

export type SearchResultCardProps = {
  city: string;
  country: string;
  weatherCondition: {
    type: WeatherConditionMain;
    description: WeatherConditionDescription;
  };
  degree: number;
  tempHigh: number;
  tempLow: number;
  wind: number;
  onClick?: () => void;
};

export const SearchResultCard = ({
  city,
  country,
  weatherCondition,
  degree,
  tempHigh,
  tempLow,
  wind,
  onClick,
}: SearchResultCardProps) => {
  const { mode } = useTempMode();

  return (
    <Box
      borderRadius="2xl"
      borderWidth={1}
      textAlign={"center"}
      onClick={onClick}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems="center"
        margin="10"
        textAlign={"start"}
        gap="10"
      >
        <Box>
          <IconSelector condition={weatherCondition.type} color="black" />
        </Box>
        <Stack gap="1">
          <Box fontWeight={"bold"}>
            <Text fontSize={"2xl"} color={"darkblue.600"}>
              {city}, {country}
            </Text>
            <Text>{weatherCondition.description}</Text>
          </Box>
          <Text>
            {degree}°{TempModeEnum[mode]} Temperature from {tempHigh} to{" "}
            {tempLow} {TempModeEnum[mode]}, wind {wind} m/s.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};
