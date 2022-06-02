import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { LoadingSpinner } from "../LoadingSpinner";

describe("LoadingSpinner", () => {
  it("should render", () => {
    render(<LoadingSpinner />);
  });
});
