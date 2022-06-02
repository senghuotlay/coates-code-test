import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { DailyCard } from "../DailyCard";

describe("DailyCard", () => {
  it("should render", () => {
    render(
      <DailyCard
        day={1}
        degree={10}
        humidity={10}
        scale={"metric"}
        weatherCondition={{
          description: "broken clouds",
          type: "Atmosphere",
        }}
        wind={10}
      />
    );
  });
});
