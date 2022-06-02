import axios from "axios";
import { TempModeType } from "../../TempMode";

export const getCity = async ({
  id,
  units = "metric",
}: {
  id: number;
  units?: TempModeType;
}) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=${units}&appid=${process.env.API_KEY}`
  );
  return data;
};
