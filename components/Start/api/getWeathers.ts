import axios from "axios";
import { TempModeType } from "../../TempMode";

export const getWeathers = async ({
  units = "metric",
}: {
  units?: TempModeType;
}) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/group?id=2147714,2158177,2174003,7839672,2063523,7839644&units=${units}&appid=${process.env.API_KEY}`
  );

  return data.list;
};
