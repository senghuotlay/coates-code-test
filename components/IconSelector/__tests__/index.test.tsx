import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { IconSelector } from "../IconSelector";

describe("IconSelector", () => {
  it("should render", () => {
    render(<IconSelector condition="Atmosphere" />);
  });
});
