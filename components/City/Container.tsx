import React from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { useTempMode } from "../TempMode";
import { useCity } from "./hooks/useCity";
import { useCityForecast } from "./hooks/useCityForecast";
import { CityView } from "./View";

type CityContainterProps = {
  id: number;
  lat: number;
  lon: number;
};

export const CityContainter = ({ id, lat, lon }: CityContainterProps) => {
  const cityForecastQuery = useCityForecast({
    lat,
    lon,
  });

  const cityQuery = useCity(id);
  const { mode } = useTempMode();

  if (!cityQuery.data || !cityForecastQuery.data) return <LoadingSpinner />;

  const cityData = cityQuery.data;
  const cityForecastData = cityForecastQuery.data;

  return (
    <CityView
      name={cityData.name}
      country={cityData.sys.country}
      degree={cityData.main.temp}
      humidity={cityData.main.humidity}
      wind={cityData.wind.speed}
      temp={{
        low: cityData.main.temp_min,
        high: cityData.main.temp_max,
      }}
      weatherCondition={{
        type: cityData.weather[0].main,
        description: cityData.weather[0].description,
      }}
      scale={mode}
      cityForecastData={cityForecastData}
    />
  );
};
