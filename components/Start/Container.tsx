import React from "react";
import { StartView } from "./View";
import { useWeathers } from "./hooks/useWeathers";
import { LoadingSpinner } from "../LoadingSpinner";
import { useTempMode } from "../TempMode";

type StartContainerProps = {
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

export const StartContainer = ({
  navigateToCityScene,
  navigateToSearchScene,
}: StartContainerProps) => {
  const { data, isLoading } = useWeathers();
  const { mode } = useTempMode();

  if (isLoading || !data?.length) return <LoadingSpinner />;

  return (
    <StartView
      weathers={data}
      scale={mode}
      navigateToCityScene={navigateToCityScene}
      navigateToSearchScene={navigateToSearchScene}
    />
  );
};
