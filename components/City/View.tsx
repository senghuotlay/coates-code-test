import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { DailyCard } from "../DailyCard";
import { IconSelector } from "../IconSelector";
import { TempChanger } from "../TempChanger";
import {
  TempModeEnum,
  TempModeType,
  useTempMode,
} from "../TempMode";
import {
  WeatherConditionMain,
  WeatherConditionDescription,
} from "../Start/types/weatherCondition";
import { CityForecastType } from "./types/cityForecast";

type CityViewProps = {
  name: string;
  country: string;
  degree: number;
  humidity: number;
  wind: number;
  temp: {
    low: number;
    high: number;
  };
  weatherCondition: {
    type: WeatherConditionMain;
    description: WeatherConditionDescription;
  };
  scale: TempModeType;
  cityForecastData: CityForecastType;
};

export const CityView = ({
  name,
  country,
  degree,
  humidity,
  wind,
  temp,
  weatherCondition,
  scale,
  cityForecastData,
}: CityViewProps) => {
  const { setMode, mode } = useTempMode();

  return (
    <>
      <TempChanger
        selectedMode={mode}
        setImperialMode={() => {
          setMode("imperial");
        }}
        setMetricMode={() => {
          setMode("metric");
        }}
        setStandardMode={() => {
          setMode("standard");
        }}
      />
      <Center>
        <Flex
          backgroundColor={"blue.900"}
          borderRadius="2xl"
          margin={"12"}
          flexDirection={"column"}
        >
          <Stack margin="16" gap="10">
            <Box textColor="white">
              <Stack textAlign={"center"}>
                <Box>
                  <IconSelector condition={weatherCondition.type} />
                </Box>
                <Heading fontSize={"3xl"}>
                  {name.toUpperCase()}, {country.toUpperCase()}
                </Heading>
                <Heading>
                  {degree}°{TempModeEnum[scale]}
                </Heading>
                <Heading fontSize={"xl"}>
                  {weatherCondition.description.toUpperCase()}
                </Heading>
                <Box>
                  <Text>
                    L: {temp.low}˚ H: {temp.high}˚ Wind: {wind}m/s Humidity:{" "}
                    {humidity}%
                  </Text>
                </Box>
              </Stack>
            </Box>

            <HStack wrap={"wrap"} gap={4} justifyContent={"center"}>
              {cityForecastData.daily.slice(1, 6).map((item) => (
                <DailyCard
                  key={item.dt}
                  day={item.dt}
                  degree={item.temp.day}
                  wind={item.wind_speed}
                  weatherCondition={{
                    type: item.weather[0].main,
                    description: item.weather[0].description,
                  }}
                  humidity={item.humidity}
                  scale={mode}
                />
              ))}
            </HStack>
          </Stack>
        </Flex>
      </Center>
    </>
  );
};
