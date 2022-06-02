import { useRouter } from "next/router";
import React from "react";
import { CityContainter } from "../components/City";

export const CityScene = () => {
  const router = useRouter();

  const lon = Number(router.query.lon);
  const lat = Number(router.query.lat);
  const id = Number(router.query.id);

  return <CityContainter id={id} lon={lon} lat={lat} />;
};

export default CityScene;
