import { useRouter } from "next/router";
import React from "react";
import { SearchContainer } from "../components/Search/Container";

export const SearchScene = () => {
  const router = useRouter();
  const name = router.query.name as string;

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
    <SearchContainer
      name={name}
      navigateToSearchScene={navigateToSearchScene}
      navigateToCityScene={navigateToCityScene}
    />
  );
};

export default SearchScene;
