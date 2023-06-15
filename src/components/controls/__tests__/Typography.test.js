import React from "react";
import { render } from "@testing-library/react";
import MuiTypography from "../Typography";

describe("MuiTypography", () => {
  it("should render the typography component with the correct variant and title", () => {
    const variant = "h1";
    const title = "Hello, World!";
    const { getByText } = render(
      <MuiTypography variant={variant} title={title} />
    );
    const typographyElement = getByText(title);

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe(variant);
  });

  it("should render the typography component with variant and title", () => {
    const variant = "h1";
    const title = "Hello, World!";
    const { getByTestId } = render(
      <MuiTypography variant={variant} title={title} />
    );
    const typographyElement = getByTestId("typography");

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe(variant);
    expect(typographyElement.textContent).toBe(title);
  });
});
