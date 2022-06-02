import { useQuery } from "react-query";
import { TempModeType } from "../../TempMode";
import { useTempMode } from "../../TempMode/useTempMode";
import { getCityForecast } from "../api/getCityForecast";
import { CityForecastType } from "../types/cityForecast";

type Props = {
  units?: TempModeType;
  lat: number;
  lon: number;
};

export const useCityForecast = ({ lat, lon }: Props) => {
  const { mode } = useTempMode();
  const { data, error, isLoading } = useQuery<CityForecastType>(
    ["cityForecast", mode],
    () =>
      getCityForecast({
        units: mode,
        lat,
        lon,
      }),
    {
      enabled: !!(mode && lat && lon),
    }
  );

  return { data, isLoading, error };
};
