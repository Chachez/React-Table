import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../Loader";

describe("Loader", () => {
  it("should render the loader when open is true", () => {
    const { getByTestId } = render(<Loader open={true} />);
    const backdropElement = getByTestId("loader-backdrop");
    const circularProgressElement = getByTestId("loader-circular-progress");

    expect(backdropElement).toBeInTheDocument();
    expect(circularProgressElement).toBeInTheDocument();
  });

  it("should not render the loader when open is false", () => {
    const { queryByTestId } = render(<Loader open={false} />);
    const backdropElement = queryByTestId("loader-backdrop");
    const circularProgressElement = queryByTestId("loader-circular-progress");

    expect(backdropElement).not.toBeInTheDocument();
    expect(circularProgressElement).not.toBeInTheDocument();
  });
});

test("renders Loader component", () => {
  render(<Loader open={true} />);

  const loaderBackdrop = screen.getByTestId("loader-backdrop");

  expect(loaderBackdrop).toBeInTheDocument();
});

test("renders Loader component with open prop set to false", () => {
  render(<Loader open={false} />);

  const loaderBackdrop = screen.queryByTestId("loader-backdrop");

  expect(loaderBackdrop).not.toBeInTheDocument();
});

test("applies custom styles to Backdrop component", () => {
  const customStyles = { color: "red", zIndex: 100 };
  render(<Loader open={true} sx={customStyles} />);

  const loaderBackdrop = screen.getByTestId("loader-backdrop");

  expect(loaderBackdrop).toHaveStyle(customStyles);
});
