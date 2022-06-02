import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  WeatherConditionDescription,
  WeatherConditionMain,
} from "../Start/types/weatherCondition";
import { IconSelector } from "../IconSelector";
import { TempModeEnum, TempModeType } from "../TempMode";

export type WeatherInfoBadgeType = {
  city: string;
  countryCode: string;
  degree: number;
  scale: TempModeType;
  weatherCondition: {
    type: WeatherConditionMain;
    description: WeatherConditionDescription;
  };
  onClick?: () => void;
};

export const WeatherInfoBadge = ({
  city,
  countryCode,
  degree,
  scale,
  weatherCondition,
  onClick,
}: WeatherInfoBadgeType) => {
  return (
    <Box
      backgroundColor={"blue.900"}
      width="2xs"
      height="xs"
      borderRadius="2xl"
      onClick={onClick}
    >
      <Box margin="6">
        <Flex flexDirection={"row"} alignItems="center" gap="1">
          <Text color={"whitesmoke"} fontWeight={"bold"} fontSize={"xl"}>
            {city}
          </Text>
          <Badge>{countryCode}</Badge>
        </Flex>

        <Flex flexDirection={"row"} alignItems="center">
          <Text fontSize={"6xl"} fontWeight="bold" color={"white"}>
            {degree}
          </Text>
          <Text color={"white"} fontSize="2xl" marginBottom={"6"}>
            °{TempModeEnum[scale]}
          </Text>
        </Flex>

        <Box marginY="6">
          <IconSelector condition={weatherCondition.type} />
        </Box>

        <Text color={"gray.200"} fontWeight="semibold">
          {weatherCondition.description.toUpperCase()}
        </Text>
      </Box>
    </Box>
  );
};
