import React from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { useSearchCities } from "./hooks/useSearchCities";
import { SearchView } from "./View";

type SearchContainerProps = {
  name: string;
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

export const SearchContainer = ({
  name,
  navigateToCityScene,
  navigateToSearchScene,
}: SearchContainerProps) => {
  const { data, isLoading } = useSearchCities(name);

  if (isLoading || !data) return <LoadingSpinner />;

  return (
    <SearchView
      cities={data}
      navigateToCityScene={navigateToCityScene}
      navigateToSearchScene={navigateToSearchScene}
    />
  );
};
