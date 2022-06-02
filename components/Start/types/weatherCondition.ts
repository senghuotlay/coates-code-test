export type WeatherConditionType = {
  description: WeatherConditionDescription;
  icon: string;
  id: number;
  main: WeatherConditionMain;
};

export type WeatherConditionMain =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Atmosphere"
  | "Clear"
  | "Clouds";

export type WeatherConditionDescription =
  | "clear sky"
  | "few clouds"
  | "scattered clouds"
  | "broken clouds"
  | "shower rain"
  | "rain"
  | "thunderstorm"
  | "snow"
  | "mist";
