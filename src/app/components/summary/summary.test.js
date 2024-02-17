import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { FlatOptions, GridItem, SummaryLabel, Wrapper } from "./styles";
import Summary, { mapStateToProps } from "./summary";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../reducer";

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
describe("Summary Component", () => {
  it("should render correctly with Redux state", () => {
    const mappedProps = mapStateToProps(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <Summary {...mappedProps} />
      </Provider>
    );

    expect(wrapper.find(Wrapper).exists()).toEqual(true); 
    expect(wrapper.find(FlatOptions).exists()).toEqual(true); 
    expect(wrapper.find(SummaryLabel).exists()).toEqual(true); 
    expect(mappedProps.summary).toEqual(initialState.formData.formFields);
    expect(mappedProps.step).toEqual(6);
  });
});
