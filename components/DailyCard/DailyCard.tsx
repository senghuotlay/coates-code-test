import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  WeatherConditionMain,
  WeatherConditionDescription,
} from "../Start/types/weatherCondition";
import { getWeekDayFromTimeStamp } from "../../utils/getDateFromTimeStamp";
import { IconSelector } from "../IconSelector";
import { TempModeEnum, TempModeType } from "../TempMode";

export type DailyCardType = {
  day: EpochTimeStamp;
  degree: number;
  humidity: number;
  wind: number;
  weatherCondition: {
    type: WeatherConditionMain;
    description: WeatherConditionDescription;
  };
};

export type DailyCardProps = DailyCardType & {
  scale: TempModeType;
};

export const DailyCard = ({
  day,
  degree,
  scale,
  humidity,
  wind,
  weatherCondition,
}: DailyCardProps) => {
  return (
    <Box
      backgroundColor="blue.800"
      borderRadius="2xl"
      textColor={"white"}
      textAlign={"center"}
      width="2xs"
    >
      <Stack margin={10} gap={4}>
        <Heading fontSize={"xl"}>{getWeekDayFromTimeStamp(day)}</Heading>
        <Box>
          <IconSelector condition={weatherCondition.type} />
        </Box>

        <Flex
          flexDirection={"row"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text fontSize={"3xl"} fontWeight="bold">
            {degree}
          </Text>
          <Text fontSize="md" marginBottom={"6"}>
            °{TempModeEnum[scale]}
          </Text>
        </Flex>
      </Stack>

      <Flex margin={6} flexDirection={"row"} justifyContent="space-between">
        <Text>H: {humidity}%</Text>
        <Text>W: {wind} m/s</Text>
      </Flex>
    </Box>
  );
};
