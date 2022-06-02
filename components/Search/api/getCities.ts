import axios from "axios";
import { TempModeType } from "../../TempMode";

export const getCities = async ({
  name,
  units = "metric",
}: {
  name: string;
  units?: TempModeType;
}) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/find?q=${name}&units=${units}&appid=${process.env.API_KEY}`
  );

  return data.list;
};
