import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import exp from "constants";

import { WeatherInfoBadge } from "../WeatherInfoBadge";

describe("WeatherInfoBadge", () => {
  it("should render", () => {
    render(
      <WeatherInfoBadge
        city="Sydney"
        countryCode="AU"
        degree={10}
        scale="metric"
        weatherCondition={{
          description: "broken clouds",
          type: "Atmosphere",
        }}
      />
    );
  });
});
