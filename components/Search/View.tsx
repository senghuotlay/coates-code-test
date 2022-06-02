import { Text } from "@chakra-ui/react";
import React from "react";
import { HeadingWrapper } from "../HeadingWrapper";
import { SearchResultCard } from "../SearchResultCard";
import { CityType } from "../City/types/city";

type SearchViewProps = {
  cities: CityType[];
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

export const SearchView = ({
  cities,
  navigateToCityScene,
  navigateToSearchScene,
}: SearchViewProps) => {
  const onSubmit = (name: string) => navigateToSearchScene(name);

  return (
    <HeadingWrapper onSubmit={onSubmit}>
      {cities.length ? (
        cities.map((item) => (
          <SearchResultCard
            key={item.id}
            city={item.name}
            country={item.sys.country}
            degree={item.main.temp}
            tempHigh={item.main.temp_max}
            tempLow={item.main.temp_min}
            wind={item.wind.speed}
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
        ))
      ) : (
        <Text>No Result found</Text>
      )}
    </HeadingWrapper>
  );
};
