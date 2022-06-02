import { useQuery } from "react-query";
import { useTempMode } from "../../TempMode";
import { getWeathers } from "../api/getWeathers";
import { WeatherType } from "../types/weather";

export const useWeathers = () => {
  const { mode } = useTempMode();

  const { data, error, isLoading } = useQuery<WeatherType[]>(
    ["weathers", mode],
    () =>
      getWeathers({
        units: mode,
      })
  );

  return { data, isLoading, error };
};
