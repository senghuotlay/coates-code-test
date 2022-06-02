import { useQuery } from "react-query";
import { useTempMode } from "../../TempMode";
import { CityType } from "../../City/types/city";
import { getCities } from "../api/getCities";

export const useSearchCities = (name: string) => {
  const { mode } = useTempMode();
  const { data, error, isLoading } = useQuery<CityType[]>(
    ["cities", name],
    () =>
      getCities({
        name,
        units: mode,
      }),
    { keepPreviousData: true, enabled: !!name }
  );

  return { data, isLoading, error };
};
