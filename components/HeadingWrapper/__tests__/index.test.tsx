import { Text } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { HeadingWrapper } from "../HeadingWrapper";

describe("HeadingWrapper", () => {
  it("should render", () => {
    render(
      <HeadingWrapper onSubmit={jest.fn}>
        <Text>Testing</Text>
      </HeadingWrapper>
    );
  });

  it("should display testing", () => {
    const { getByText } = render(
      <HeadingWrapper onSubmit={jest.fn}>
        <Text>Testing</Text>
      </HeadingWrapper>
    );

    expect(getByText("Testing")).toBeDefined();
  });
});
