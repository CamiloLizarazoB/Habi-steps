import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { Wrapper } from "./styles";
import Input from "./input";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../reducer";
import { mapStateToProps } from "../summary/summary";
import { Provider } from "react-redux";
import { FormProvider } from "react-hook-form";

configure({ adapter: new Adapter() });

const initialState = {
  formData: {
    formFields: {
      name: "sdfvb",
      email: "camilo.lizarazo87@gmail.com",
      address: "hygygygyg",
      floor: "2",
      flatOptions: {
        bbq: false,
        room: false,
        park: true,
      },
    },
    step: 6,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export function useForm() {
  return {
    handleSubmit: jest.fn(),
    formState: { dirtyFields: [], isValid: true },
    register: jest.fn(),
  };
}
describe("Summary Component", () => {
  it("should render correctly with Redux state", () => {
    const mockMethods = useForm();

    const mappedProps = mapStateToProps(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <FormProvider {...mockMethods}>
          <Input {...mappedProps} />
        </FormProvider>
      </Provider>
    );

    expect(wrapper.find(Wrapper).exists()).toEqual(true);
    // expect(mappedProps.summary).toEqual(initialState.formData.formFields);
    // expect(mappedProps.step).toEqual(6);
  });
});
