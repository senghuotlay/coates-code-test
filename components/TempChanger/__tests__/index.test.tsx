import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import exp from "constants";

import { TempChanger } from "../TempChanger";

describe("TempChanger", () => {
  it("should render", () => {
    render(
      <TempChanger
        selectedMode="metric"
        setImperialMode={jest.fn}
        setMetricMode={jest.fn}
        setStandardMode={jest.fn}
      />
    );
  });

  it("should display celsius", () => {
    const { getByText } = render(
      <TempChanger
        selectedMode="metric"
        setImperialMode={jest.fn}
        setMetricMode={jest.fn}
        setStandardMode={jest.fn}
      />
    );

    expect(getByText("C")).toBeDefined();
  });

  it("should display kelvin", () => {
    const { getByText } = render(
      <TempChanger
        selectedMode="standard"
        setImperialMode={jest.fn}
        setMetricMode={jest.fn}
        setStandardMode={jest.fn}
      />
    );

    expect(getByText("K")).toBeDefined();
  });

  it("should display celsius", () => {
    const { getByText } = render(
      <TempChanger
        selectedMode="imperial"
        setImperialMode={jest.fn}
        setMetricMode={jest.fn}
        setStandardMode={jest.fn}
      />
    );

    expect(getByText("F")).toBeDefined();
  });
});
