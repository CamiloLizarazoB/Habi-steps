import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { Router } from "react-router-dom";
import summaryContainer from "./app/containers/summary-container/summary-container";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });


describe("App Component", () => {
  it("Shallow renderin", () => {
    const step = 1;
    const wrapper = shallow(
      <Provider store={store}>
        <App step={step} />
      </Provider>
    );
    expect(wrapper.find(App).exists()).toEqual(true);
    expect(wrapper.find(summaryContainer).exists()).toEqual(false);
  });
  it("Full dom rendering", () => {
    const step = 6;
    const wrapper = mount(
      <Provider store={store}>
        <App step={step} />
      </Provider>
    );
    expect(wrapper.find(Router).exists()).toEqual(true);
    expect(wrapper.find(summaryContainer).exists()).toEqual(true);
  });
});
