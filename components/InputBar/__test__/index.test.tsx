import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { InputBar } from "../InputBar";

describe("InputBar", () => {
  it("should render", () => {
    render(<InputBar onSubmit={jest.fn} />);
  });

  it("should display placeholder", () => {
    const onPress = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InputBar onSubmit={() => onPress()} />
    );
    expect(getByPlaceholderText("Enter city name")).toBeDefined();
  });
});
