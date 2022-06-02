import { useRouter } from "next/router";
import React from "react";
import { StartContainer } from "../components/Start/Container";

export const StartScene = () => {
  const router = useRouter();

  const navigateToCityScene = ({
    id,
    lat,
    lon,
  }: {
    id: number;
    lat: number;
    lon: number;
  }) => {
    router.push({
      pathname: "city",
      query: {
        id,
        lat,
        lon,
      },
    });
  };

  const navigateToSearchScene = (name: string) => {
    router.push({
      pathname: "search",
      query: {
        name,
      },
    });
  };

  return (
    <StartContainer
      navigateToCityScene={navigateToCityScene}
      navigateToSearchScene={navigateToSearchScene}
    />
  );
};

export default StartScene;
