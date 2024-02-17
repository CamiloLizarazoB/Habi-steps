import React from "react";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { Wrapper } from "./styles";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../reducer";
import SummaryContainer, { mapStateToProps } from "./summary-container";

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
describe("Summary Container", () => {
  it("should render correctly with Redux state", () => {
    const mappedProps = mapStateToProps(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <SummaryContainer key={'no-modal'} {...mappedProps} />
      </Provider>
    );

    expect(wrapper.find(Wrapper).exists()).toEqual(true); 
    expect(mappedProps.step).toEqual(6);
  });
});
