import React from "react";
import { render } from "@testing-library/react";
import { FormProvider } from "react-hook-form"; // Importa FormProvider y useForm desde react-hook-form
import CheckBoxGroup from "./checkbox-group";

export function useForm() {
  return {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    register: jest.fn()
  };
}

describe("CheckBoxGroup component", () => {
  test("renders without crashing", () => {
    const mockMethods = useForm();

    const { getByText } = render(
      <FormProvider {...mockMethods}>
        <CheckBoxGroup
          name="test"
          options={[{ name: "option1", text: "Option 1" }]}
        />
      </FormProvider>
    );

    expect(getByText("Option 1")).toBeInTheDocument();
  });
});
