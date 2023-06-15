import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MuiTextField from "../InputField";

describe("MuiTextField", () => {
  it("should call the onChange handler when the value changes", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <MuiTextField label="Email" onChange={onChangeMock} />
    );
    const textFieldElement = getByLabelText("Email");

    fireEvent.change(textFieldElement, {
      target: { value: "test@example.com" },
    });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
    expect(textFieldElement.value).toBe("test@example.com");
  });

  it("should handle onChange event", () => {
    const label = "Username";
    const variant = "outlined";
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <MuiTextField label={label} variant={variant} onChange={onChange} />
    );

    const textFieldElement = getByLabelText(label);

    fireEvent.change(textFieldElement, { target: { value: "testuser" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "testuser",
        }),
      })
    );
  });
});
