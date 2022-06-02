import { Flex } from "@chakra-ui/react";
import React from "react";

import { WeatherType } from "./types/weather";
import { TempModeType } from "../TempMode";
import { WeatherInfoBadge } from "../WeatherInfoBadge";
import { HeadingWrapper } from "../HeadingWrapper";

type StartViewProps = {
  weathers: WeatherType[];
  scale: TempModeType;
  navigateToCityScene: ({
    id,
    lat,
    lon,
  }: {
    id: number;
    lat: number;
    lon: number;
  }) => void;
  navigateToSearchScene: (name: string) => void;
};

export const StartView = ({
  weathers,
  scale,
  navigateToCityScene,
  navigateToSearchScene,
}: StartViewProps) => {
  const onSubmit = (name: string) => navigateToSearchScene(name);

  return (
    <HeadingWrapper onSubmit={onSubmit}>
      <Flex
        direction={"row"}
        flexWrap={"wrap"}
        gap="4"
        alignItems={"center"}
        justifyContent="center"
      >
        {weathers.map((item) => (
          <WeatherInfoBadge
            key={item.id}
            city={item.name}
            countryCode={item.sys.country}
            degree={item.main.temp}
            scale={scale}
            weatherCondition={{
              type: item.weather[0].main,
              description: item.weather[0].description,
            }}
            onClick={() =>
              navigateToCityScene({
                id: item.id,
                lat: item.coord.lat,
                lon: item.coord.lon,
              })
            }
          />
        ))}
      </Flex>
    </HeadingWrapper>
  );
};
