import { Country } from "../../../countries.enum";
import { WeatherConditionType } from "../../Start/types/weatherCondition";

export type CityType = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  rain: { "1h": number };
  sys: {
    country: Country;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: EpochTimeStamp;
  visibility: number;
  weather: Array<WeatherConditionType>;
  wind: {
    deg: 310;
    speed: 3.6;
  };
};
