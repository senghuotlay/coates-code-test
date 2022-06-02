import { useQuery } from "react-query";
import { useTempMode } from "../../TempMode";
import { getCity } from "../api/getCity";
import { CityType } from "../types/city";

export const useCity = (id: number) => {
  const { mode } = useTempMode();

  const { data, error, isLoading } = useQuery<CityType>(
    ["cityweather", mode],
    () =>
      getCity({
        id,
        units: mode,
      }),
    {
      enabled: !!id,
    }
  );

  return { data, isLoading, error };
};
