import axios from "axios";
import { TempModeType } from "../../TempMode";

export const getCityForecast = async ({
  units = "metric",
  lat,
  lon,
}: {
  units?: TempModeType;
  lat: number;
  lon: number;
}) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,hourly&appid=${process.env.API_KEY}`
  );
  return data;
};
