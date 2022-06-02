import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { SearchResultCard } from "../SearchResultCard";

describe("SearchResultCard", () => {
  it("should render", () => {
    render(
      <SearchResultCard
        city="Sydney"
        country="AU"
        degree={10}
        tempHigh={10}
        tempLow={10}
        weatherCondition={{
          description: "broken clouds",
          type: "Atmosphere",
        }}
        wind={10}
      />
    );
  });
});
