import { Country } from "../../../countries.enum";
import { WeatherConditionType } from "./weatherCondition";

export type WeatherType = {
  clouds: {
    all: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: Country;
    sunrise: number;
    sunset: number;
    timezone: EpochTimeStamp;
  };
  visibility: number;
  weather: Array<WeatherConditionType>;
  wind: {
    deg: number;
    speed: number;
  };
};
